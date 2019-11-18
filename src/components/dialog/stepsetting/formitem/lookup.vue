<template>
  <div class="lookup">
    <!-- <h1>{{data.type}}</h1> -->
    <el-form ref="form" :model="form" label-width="150px">
      <el-form-item
        :label="'dataset'"
        :rules="[
              { required: true, message: '', trigger: 'blur' }
            ]"
      >
        <el-tooltip
          lass="item"
          effect="dark"
          content="1.数据集名称,从资源目录选择或编辑创建 2.格式为字符串：字符/数字/下划线/-/的组合"
          placement="top"
        >
          <i class="parIcon el-icon-warning"></i>
        </el-tooltip>
        <el-input
          placeholder="请选择内容"
          v-model="form.datasetName"
          :model="form.datasetName"
          :disabled="true"
          name="dataset"
        >
          <el-button
            slot="append"
            icon="icon iconfont icon-ir-search"
            @click="selectDataset"
            name="dataSetInq"
          ></el-button>
        </el-input>
        <p class="sign" v-if="!form.datasetName">选择内容不能为空</p>
      </el-form-item>
      <el-form-item label="lookupEngine">
        <el-tooltip lass="item" effect="dark" content="lookupEngine" placement="top">
          <i class="parIcon el-icon-warning"></i>
        </el-tooltip>
        <el-select
          v-model="form.lookupEngine"
          placeholder="请选择"
          @change="getFormItemByType(form.lookupEngine)"
        >
          <el-option v-for="(item,index) in typeData" :key="index" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item
        :prop="item.name"
        :label="item.name"
        v-for="(item,index) in formItemList"
        :key="index"
        :rules="{
      required: true, message: '', trigger: 'blur'
    }"
        v-if="item.isshow"
      >
        <el-tooltip lass="item" effect="dark" :content="item.name" placement="top">
          <i class="parIcon el-icon-warning"></i>
        </el-tooltip>
        <el-input
          v-if="(item.type=='String'||item.type=='long'||item.type=='char')&&!item.values"
          v-model="form[item.name]"
        ></el-input>
        <el-select
          v-if="item.type=='String'&&item.values"
          v-model="form[item.name]"
          placeholder="请选择"
        >
          <el-option
            v-for="(subitem,subindex) in item.values?item.values:''"
            :key="subindex"
            :label="subitem"
            :value="subitem"
          ></el-option>
        </el-select>
        <el-switch v-if="item.type=='boolean'" v-model="form[item.name]"></el-switch>
      </el-form-item>
    </el-form>
    <adItem :data="{adformItemList:adformItemList,adformItemData:adformItemData}"></adItem>
  </div>
</template>


<script>
import { mapGetters, mapActions, mapState } from "vuex";
import { steplist, stepsettings, outputStep } from "@server/realtime/index";
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
import adItem from "./common/index";
import { setUpWatchersUtils, setFormDataUtils } from "@components/utils/index";
export default {
  watch: {
    "realtime.setStepData"(val) {
      this.setFormData(val);
    },

    //选择 dataset 时初始化表单 dataset id ,name
    "realtime.selectCheckedDataSet"(val) {
      this.initForm({
        datasetName: val.datasetName,
        id: val.id
      });
    },

    "realtime.initParametData"(val) {
      // this.initForm({ id: val.id, datasetName: val.datasetName });
      //console.log('this.form.lookupEngine',this.form.lookupEngine)

      this.getFormItemByType(val.lookupEngine);
      this.initForm({
        datasetName: val.datasetName,
        id: val.id,
        lookupEngine:val.lookupEngine
      });
    },
    form(val) {
      this.setParamertData(val);
    }
    // "form.lookupEngine"(val) {
    //   this.setParamertData({
    //     ...this.form,
    //     lookupEngine: val
    //   });

    //   if (val) {
    //     this.getFormItemByType(val);
    //   }
    // },
    // "form.url"(val) {
    //   this.setParamertData({
    //     ...this.form,
    //     url: val
    //   });
    // },
    // "form.password"(val) {
    //   this.setParamertData({
    //     ...this.form,
    //     password: val
    //   });
    // },
    // "form.table"(val) {
    //   this.setParamertData({
    //     ...this.form,
    //     table: val
    //   });
    // },
    // "form.key"(val) {
    //   this.setParamertData({
    //     ...this.form,
    //     key: val
    //   });
    // },
    // "form.valueSchema"(val) {
    //   this.setParamertData({
    //     ...this.form,
    //     valueSchema: val
    //   });
    // },
    // "form.mapdbFile"(val) {
    //   this.setParamertData({
    //     ...this.form,
    //     mapdbFile: val
    //   });
    // },
    // "form.mapdbName"(val) {
    //   this.setParamertData({
    //     ...this.form,
    //     mapdbName: val
    //   });
    // },
    // "form.mapdbOutputFields"(val) {
    //   this.setParamertData({
    //     ...this.form,
    //     mapdbOutputFields: val
    //   });
    // },
    // "form.parallelism"(val) {
    //   this.setParamertData({
    //     ...this.form,
    //     parallelism: val
    //   });
    // }
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
      form: {
        // lookupEngine: "Redis",
        // datasetName: ""
      },
      formatData: ["csv", "parquet"],
      typeData: ["MapDB", "Redis"], //kafka
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
    this.$nextTick(() => {
      //this.modifyLoadingStatus(false);
    });
  },
  beforeDestroy() {},
  destroyed: function() {},
  methods: {
    ...mapActions([
      "openDialog",
      "setParamertData",
      "modifyLoadingStatus",
      "getStepConfiug",
      "initParametData"
    ]),
    setUpWatchers(watchList, formList) {
      for (let i in watchList) {
        let formItem = formList[i];
        let watchItem = watchList[i];
        this.$watch(watchItem, newValue => {
          let item = {};
          item[formItem] = newValue;
          this.setParamertData({ ...this.form, ...item });
          if (watchItem == "form.lookupEngine") {
            this.getFormItemByType(newValue);
          }
        });
      }
    },
    selectDataset() {
      this.openDialog(true);
    },
    initForm(val) {
      this.form = { ...this.form, ...val };
      //this.form = val;
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
        // console.log("data", data);

        // console.log("allformItemList", this.allformItemList);

        // this.allformItemData = {
        //   // id: data.id
        //   //   ? data.id
        //   //   : this.getValueByName(this.allformItemList, "id"),
        //   // datasetName: data.datasetName
        //   //   ? data.datasetName
        //   //   : this.getValueByName(this.allformItemList, "datasetName"),
        //   // lookupEngine: this.form.lookupEngine
        //   //   ? this.form.lookupEngine
        //   //   : this.getValueByName(this.allformItemList, "lookupEngine"),

        //   id: data.id
        //     ? data.id
        //     : this.getValueByName(this.allformItemList, "id"),
        //   datasetName: data.datasetName
        //     ? data.datasetName
        //     : this.getValueByName(this.allformItemList, "datasetName"),
        //   lookupEngine: this.form.lookupEngine
        //     ? this.form.lookupEngine
        //     : this.getValueByName(this.allformItemList, "lookupEngine"),
        //   url: data.url
        //     ? data.url
        //     : this.getValueByName(this.allformItemList, "url"),
        //   password: data.password
        //     ? data.password
        //     : this.getValueByName(this.allformItemList, "password"),
        //   key: data.key
        //     ? data.key
        //     : this.getValueByName(this.allformItemList, "key"),
        //   table: data.table
        //     ? data.table
        //     : this.getValueByName(this.allformItemList, "table"),
        //   valueSchema: data.valueSchema
        //     ? data.valueSchema
        //     : this.getValueByName(this.allformItemList, "valueSchema"),
        //   mapdbFile: data.mapdbFile
        //     ? data.mapdbFile
        //     : this.getValueByName(this.allformItemList, "mapdbFile"),
        //   mapdbName: data.mapdbName
        //     ? data.mapdbName
        //     : this.getValueByName(this.allformItemList, "mapdbName"),
        //   mapdbOutputFields: data.mapdbOutputFields
        //     ? data.mapdbOutputFields
        //     : this.getValueByName(this.allformItemList, "mapdbOutputFields"),
        //   parallelism: data.parallelism
        //     ? data.parallelism
        //     : this.getValueByName(this.formItemList, "parallelism")
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
      //item.name!='separator'||(item.bind=='bind'&&item.name=='separator'&&form.format=='csv')

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
        (val.name == "nullValue" && format == "csv") ||
        (val.name == "jsonSchema" && format == "csv")
      ) {
        return true;
      }

      if (
        (val.name == "separator" && format != "csv") ||
        (val.name == "escapeChar" && format != "csv") ||
        (val.name == "quoteChar" && format != "csv") ||
        (val.name == "nullValue" && format != "csv") ||
        (val.name == "jsonSchema" && format != "csv")
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
    getFormItemByType(val) {
      //this.initParametData({});
      this.formItemList = [];
      stepsettings("lookup_" + val).then(
        data => {
          this.getStepConfiug(data);
        },
        err => {
          // this.$message({
          //   message: err.response.message,
          //   type: "error",
          //   duration: 1500
          // });
        }
      );
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
.lookup {
  .sign {
    margin: 0px;
    color: red;
    padding: 0px;
    font-size: 8px;
  }
}
</style>
