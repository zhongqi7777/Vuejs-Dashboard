<template>
  <div class="transform">
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
        {{' 使用 Ctrl-Shift-Alt-I 插入字段 Ctrl-Shift-Alt-F 格式化'}}
        <el-table
          :data="expressionsArr&&expressionsArr.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          style="width: 100%"
          max-height="500"
          id="bm-nodeset-transform-table"
        >
          <el-table-column type="index" width="60" :index="indexMethod"></el-table-column>
          <el-table-column label="字段">
            <template slot-scope="scope">
              <ace-editor
                @getValue="(value) => expressionsVal(value,(currentPage-1)*pagesize + scope.$index,expressionsArr)"
                :isUseTableName="false"
                :dictionaries="{}"
                :defaultsql="expressionsArr[(currentPage-1)*pagesize + scope.$index]"
              />
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="80">
            <template slot-scope="scope">
              <div class="removeExpressions(scope.$index)">
                <i
                  @click="removeExpressions(scope.$index,expressionsArr)"
                  title="删除当前表达式"
                  class="i remove el-icon-remove-outline"
                ></i>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <div class="addExpressions">
          <i @click="addExpressions" title="新增表达式" class="i add el-icon-circle-plus-outline"></i>
        </div>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[8, 16, 50, 100]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="expressionsArr&&expressionsArr.length"
        ></el-pagination>
      </el-form-item>
    </el-form>

    <upload :data="uploadData" @setExpressionsArr="setExpressionsArr"></upload>
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
import upload from "../../../uploadDialog/index";
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
    // "form.expressions"(val) {
    //   this.expressionsArr = val ? [...val] : [];
    // },
    // "form.parallelism"(val) {
    //   this.setParamertData({
    //     ...this.form,
    //     parallelism: val
    //   });
    // },
    expressionsArr(val) {
      // console.log('expressionsArr(val) {',val);
      // console.log("expressionsArr",this.expressionsArr);
      this.setParamertData({
        ...this.form,
        expressions: val
      });
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
    upload,
    adItem
  },
  data: function() {
    return {
      form: {
        // expressions: []
      },
      expressionsArr: [],
      currentPage: 1,
      pagesize: 8,
      bOk: false,
      uploadData: { dialogUploadVisible: false },
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

          if (watchItem == "form.expressions") {
            this.expressionsArr = newValue ? [...newValue] : [];
          } else {
            this.setParamertData({ ...this.form, ...item });
          }
        });
      }
    },
    getValue(val) {
      this.form.sql = val;
    },
    indexMethod(index) {
      return this.pagesize * (this.currentPage - 1) + index + 1;
    },
    expressionsVal(val, index, row) {
     // console.log('expressionsVal(val, index, row) {');
      this.expressionsArr = _.map(this.expressionsArr, (item, itemIndex) => {
        if (index == itemIndex) {
          return val;
        }
        return item;
      });
    },
    addExpressions() {
      // this.expressionsArr = [
      //   ...this.expressionsArr,
      //   (this.expressionsArr.length + 1).toString()
      // ];

      this.expressionsArr = [
        ...this.expressionsArr,
        ""
      ];
    },
    removeExpressions(index, rows) {
      rows.splice((this.currentPage - 1) * this.pagesize + index, 1);
      if (rows.length % this.pagesize === 0 && this.currentPage !== 1) {
        this.currentPage = this.currentPage - 1;
      }
    },
    uploadExpressions() {
      this.uploadData = { dialogUploadVisible: true };
    },
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    setExpressionsArr(val) {},
    initForm(val) {
      this.form = val;
      this.expressionsArr = val.expressions?va.expressions:[];
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
            if (watchItem == "form.expressions") {
              this.expressionsArr = newValue ? [...newValue] : [];
            } else {
              this.setParamertData(formData);
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
        //   expressions: data.expressions
        //     ? data.expressions
        //     : this.getValueByName(this.allformItemList, "expressions"),
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
.transform {
  .addExpressions {
    float: left;
    right: 0px;
    top: 0px;
  }
  .uploadExpressions {
    float: left;
    margin-left: 10px;
  }
  .removeExpressions {
    float: left;
    margin-left: 10px;
  }
  .i {
    color: #3e98fe;
  }
  .remove {
    color: #ff4949;
    cursor: pointer;
  }
  .add {
    cursor: pointer;
  }
  .upload {
    cursor: pointer;
    color: #67c23a;
  }
  .titleIcon {
    color: #ffffff;
  }
  .sign {
    color: red;
    padding: 0px;
    font-size: 8px;
    margin-left: 10px;
    font-style: normal;
  }
}
</style>
