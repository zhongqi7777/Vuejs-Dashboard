<template>
  <div class="sql">
    <el-form ref="form" :model="form" label-width="150px">
      <el-form-item
        :prop="item.name"
        :label="item.name"
        v-for="(item,index) in formItemList"
        :key="index"
        :rules="{
      required:  item.required, message: '', trigger: 'blur'
    }"
        v-if="item.isshow"
      >
        <el-tooltip lass="item" effect="dark" :content="item.name" placement="top">
          <i class="parIcon el-icon-warning"></i>
        </el-tooltip>
        {{' 使用 Ctrl-Shift-Alt-I 插入字段 Ctrl-Shift-Alt-F 格式化'}}
        <ace-editor
          @removeElement="removeElement"
          @getValue="getValue"
          :isUseTableName="false"
          height="150"
          :dictionaries="dictionaries"
          :defaultsql="form.sql"
        />
        <i class="sign" v-if="item.name==''">{{'sql'|cn}} 不能为空</i>
      </el-form-item>
    </el-form>
    <adItem :data="{adformItemList:adformItemList,adformItemData:adformItemData}"></adItem>
  </div>
</template>


<script>
import { mapGetters, mapActions, mapState } from "vuex";
import {
  isEmpty,
  forEach,
  map,
  mapKeys,
  keys,
  cloneDeep,
  isEqual,
  filter,
  difference
} from "lodash";
import AceEditor from "@components/aceEditor/aceEditor";
import adItem from "./common/index";
import { setUpWatchersUtils, setFormDataUtils } from "@components/utils/index";
export default {
  watch: {
    "realtime.setStepData"(val) {
      this.setFormData(val);
    },
    "realtime.initParametData"(val) {
      this.initForm(val);
    },
    form(val) {
      this.setParamertData(val);
    },
    // "form.sql"(val) {
    //   this.setParamertData({
    //     ...this.form,
    //     sql: val
    //   });
    // },
    // "form.parallelism"(val) {
    //   this.setParamertData({
    //     ...this.form,
    //     parallelism: val
    //   });
    // },
    "realtime.initCheckedinputData"(val) {
      this.dictionaries = {
        custom: {
          schemas: _.map(val, item => {
            return item.column;
          })
        }
      };
    }
  },
  props: {
    data: {
      type: Object,
      default: false
    }
  },
  components: {
    AceEditor,
    adItem
  },
  data: function() {
    return {
      //[{"name":"sql","type":"String","required":false}]
      dictionaries: {},
      form: {},
      formItemList: [],
      adformItemList: [],
      allformItemList: [],
      formItemData: [],
      adformItemData: {},
      allformItemData: [],
      unWatchlist: []
    };
  },
  computed: {
    ...mapState(["realtime"])
  },
  mounted() {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed: function() {},
  methods: {
    ...mapActions(["openDialog", "setParamertData", "modifyLoadingStatus"]),
    setUpWatchers(watchList, formList) {
      for (let i in watchList) {
        let formItem = formList[i];
        let watchItem = watchList[i];
        this.$watch(watchItem, newValue => {
          let item = {};
          item[formItem] = newValue;
          this.setParamertData({ ...this.form, ...item });
          if (watchItem == "form.format") {
            this.formItemList = this.filterFormItem(
              this.formItemList,
              newValue
            );
          }
        });
      }
    },
    removeElement() {
      if (document.querySelector(".v-modal")) {
        document.querySelector(".v-modal").remove();
      }
    },
    getValue(val) {
      this.form.sql = val;
    },
    initForm(val) {
      // this.form = {
      //   sql: val.sql
      // };
      this.form = val;
    },
    getFormItemData(formItem, data) {
      let result = {};
      _.forEach(formItem, item => {
        _.forEach(data, (subitem, key) => {
          if (key == item.name) {
            result[key] = subitem;
          }
        });
      });

      return result;
    },
    setFormData(val) {
      this.$nextTick(() => {
        //表单全部项
        this.allformItemList = this.filterFormItem(val, this.form.format);
        //表单高级选项
        this.adformItemList = filter(this.allformItemList, item => {
          return item.advanced;
        });
        //表单基本项
        this.formItemList = difference(
          this.allformItemList,
          this.adformItemList
        );

        let data = this.realtime.initParametData;

        this.allformItemData = this.setallformItemData(data);

        this.adformItemData = this.getFormItemData(
          this.adformItemList,
          this.allformItemData
        );

        //初始化表单数据
        this.initForm({
          ...this.form,
          ...this.setallformItemData(data)
        });

        //注销 watch
        forEach(this.unWatchlist, unWatch => {
          unWatch();
        });
        this.unWatchlist = [];

        //add dynamic watched

        let formkeys = mapKeys(this.form, function(value, key) {
          return "form." + key;
        });

        setUpWatchersUtils(
          keys(formkeys),
          keys(this.form),
          this.unWatchlist,
          this.form,
          (watchItem, newValue, formData) => {
            if (watchItem == "form.aggregates") {
              this.aggregateArr = newValue ? newValue : [];
            } else {
              this.setParamertData(formData);
              if (watchItem == "form.windowType") {
                if (newValue != "slide") {
                  delete this.form.slide;
                } else {
                  this.form.slide = "30";
                }
                this.formItemList = this.filterFormItem(
                  this.formItemList,
                  newValue
                );
              }
            }
          },
          this
        );

        //this.setUpWatchers(keys(formkeys), keys(this.form));
        // this.allformItemList = this.filterFormItem(val, this.form.format);
        // // this.allformItemList = val;
        // this.adformItemList = _.filter(this.allformItemList, item => {
        //   return item.advanced;
        // });
        // this.formItemList = _.difference(
        //   this.allformItemList,
        //   this.adformItemList
        // );

        // let data = this.realtime.initParametData;
        // // console.log("data", data);

        // // console.log("allformItemList", this.allformItemList);

        // this.allformItemData = {
        //   sql: data.sql
        //     ? data.sql
        //     : this.getValueByName(this.allformItemList, "sql"),
        //   parallelism: data.parallelism
        //     ? data.parallelism
        //     : this.getValueByName(this.allformItemList, "parallelism")
        // };

        // this.formItemData = this.getFormItemData(
        //   this.formItemList,
        //   this.allformItemData
        // );

        // this.adformItemData = this.getFormItemData(
        //   this.adformItemList,
        //   this.allformItemData
        // );
        // this.initForm({
        //   ...this.formItemData,
        //   //高级选项
        //   ...this.adformItemData
        // });
      });
    },
    filterFormItem(val, format) {
      return _.map(val, item => {
        return {
          ...item,
          isshow: this.isshow(item, format)
        };
      });
    },

    isshow(val, format) {
      if (
        (val.name == "separator" && format == "csv") ||
        (val.name == "escapeChar" && format == "csv") ||
        (val.name == "quoteChar" && format == "csv") ||
        (val.name == "nullValue" && format == "csv")
      ) {
        return true;
      }

      if (
        (val.name == "separator" && format != "csv") ||
        (val.name == "escapeChar" && format != "csv") ||
        (val.name == "quoteChar" && format != "csv") ||
        (val.name == "nullValue" && format != "csv") ||
        (val.name == "jsonSchema" && format != "json")
      ) {
        return false;
      }
      return true;
    },
    getValueByName(data, val) {
      let result = "";
      _.forEach(data, (value, key) => {
        if (value.name == val) {
          result = value.defaultValue;
        }
      });

      return result;
    },
    setallformItemData(initParametData) {
      let allformItemData = {};
      let formkeys = map(this.allformItemList, val => {
        return val.name;
      });
      forEach(formkeys, val => {
        if (val == "processOnce") {
          allformItemData[val] =
            initParametData[val] == "" ? false : initParametData[val];
        } else {
          allformItemData[val] = initParametData[val]
            ? initParametData[val]
            : this.getValueByName(this.allformItemList, val);
        }
      });

      return allformItemData;
    }
  }
};
</script>

<style lang="scss">
.sql {
  .sign {
    margin-left: 150px;
    color: red;
    padding: 0px;
    font-size: 8px;
    font-style: normal;
  }
}
</style>
