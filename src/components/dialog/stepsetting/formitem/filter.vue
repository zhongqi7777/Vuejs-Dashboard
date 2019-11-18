<template>
  <div>
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
        <el-input
          v-if="(item.type=='String'||item.type=='char')&&!item.values"
          v-model="form[item.name]"
        ></el-input>
      </el-form-item>
    </el-form>
    <adItem :data="{adformItemList:adformItemList,adformItemData:adformItemData}"></adItem>
  </div>
</template>


<script>
import { mapGetters, mapActions, mapState } from "vuex";
import adItem from "./common/index";
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
    }
  },
  computed: {
    ...mapState(["realtime"])
  },
  props: {
    data: {
      type: Object,
      default: false
    }
  },
  components: { adItem },
  data: function() {
    return {
      //[{"name":"serialVersionUID","type":"long"},{"name":"condition","type":"String"}]
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
  mounted() {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {
  },
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
    initForm(val) {
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
        //this.setUpWatchers(keys(formkeys), keys(this.form));

        setUpWatchersUtils(
          keys(formkeys),
          keys(this.form),
          this.unWatchlist,
          this.form,
          (watchItem, newValue, formData) => {
            this.setParamertData(formData);
            if (watchItem == "form.format") {
              this.formItemList = this.filterFormItem(
                this.formItemList,
                newValue
              );
            }
          },
          this
        );
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
</style>
