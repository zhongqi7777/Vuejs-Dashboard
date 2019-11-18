<template>
  <div class="sink-step">
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
          v-if="(item.type=='String'||item.type=='char')&&!item.values&&item.name!='timeCol'"
          v-model="form[item.name]"
        ></el-input>

        <el-select v-if="item.name=='timeCol'" v-model="form[item.name]" placeholder="请选择">
          <el-option
            v-for="(subitem,subindex) in mapData(cloneDeep(realtime.initInputData))"
            :key="subindex"
            :label="subitem"
            :value="subitem"
          ></el-option>
        </el-select>

        <!-- groupBy -->
        <el-select
          v-if="item.type=='String[]'"
          v-model="form[item.name]"
          placeholder="请选择"
          multiple
        >
          <el-option
            v-for="(subitem,subindex) in mapData(cloneDeep(realtime.initInputData))"
            :key="subindex"
            :label="subitem"
            :value="subitem"
          ></el-option>
        </el-select>

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

        <el-table
          :data="aggregateArr.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          style="width: 100%"
          max-height="500"
          v-if="item.name=='aggregates'"
        >
          <el-table-column type="index" width="60" :index="indexMethod"></el-table-column>
          <el-table-column
            :label="subitem.name"
            v-for="(subitem,subindex) in item.type"
            :key="subindex"
          >
            <template slot-scope="scope">
              <el-input v-if="subindex==2" v-model="scope.row[subitem.name]" @blur="inpputBlur"></el-input>

              <!-- groupBy -->
              <el-select v-if="subindex==0" v-model="scope.row[subitem.name]" placeholder="请选择">
                <el-option
                  v-for="(subitem,subindex) in mapData(cloneDeep(realtime.initInputData))"
                  :key="subindex"
                  :label="subitem"
                  :value="subitem"
                ></el-option>
              </el-select>

              <el-select
                v-if="subitem.type=='String'&&subitem.values"
                v-model="scope.row[subitem.name]"
                placeholder="请选择"
              >
                <el-option
                  v-for="(item,index) in subitem.values?subitem.values:''"
                  :key="index"
                  :label="item"
                  :value="item"
                ></el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="80">
            <template slot-scope="scope">
              <div class="removeExpressions(scope.$index)">
                <i
                  @click="removeExpressions(scope.$index,aggregateArr)"
                  title="删除当前表达式"
                  class="i remove el-icon-remove-outline"
                ></i>
              </div>
              <!-- <div class="addExpressions">
                <i
                  @click="addExpressions(scope.$index)"
                  title="当前行下方新增表达式"
                  class="i add el-icon-circle-plus-outline"
                ></i>
              </div>-->
            </template>
          </el-table-column>
        </el-table>
        <div class="addExpressions" v-if="item.name=='aggregates'">
          <i @click="addExpressions" title="新增表达式" class="i add el-icon-circle-plus-outline"></i>
        </div>

        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[8, 16, 50, 100]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="aggregateArr.length"
          v-if="item.name=='aggregates'"
        ></el-pagination>
      </el-form-item>
    </el-form>
    <adItem :data="{adformItemList:adformItemList,adformItemData:adformItemData}"></adItem>
  </div>
</template>


<script>
import { mapGetters, mapActions, mapState } from "vuex";
import { querySchema } from "@api";
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
    form(val) {
      if (val.windowType != "slide") {
        delete this.form.slide;
      }
      // this.isDeleteItem(val.windowType,"slide",this.form)
      this.setParamertData(val);
    },

    aggregateArr(val) {
      this.setParamertData({
        ...this.form,
        aggregates: val
      });
    }

    // "form.groupBy"(val) {
    //   this.setParamertData({
    //     ...this.form,
    //     groupBy: val
    //   });
    // },
    // "form.aggregates"(val) {
    //   this.aggregateArr = val;
    // },
    // "form.tumble"(val) {
    //   this.setParamertData({
    //     ...this.form,
    //     tumble: val
    //   });
    // },
    // "form.windowType"(val) {
    //   if (val != "slide") {
    //     delete this.form.slide;
    //   } else {
    //     this.form.slide = "30";
    //   }
    //   // this.isDeleteItem(val,"slide",this.form)
    //   this.setParamertData({
    //     ...this.form,
    //     windowType: val
    //   });

    //   this.formItemList = this.filterFormItem(this.formItemList, val);
    // },
    // "form.window"(val) {
    //   this.setParamertData({
    //     ...this.form,
    //     window: val
    //   });
    // },
    // "form.slide"(val) {
    //   // console.log(' "form.slide"(val) {',val);
    //   this.setParamertData({
    //     ...this.form,
    //     slide: val
    //   });
    // },
    // "form.timeCol"(val) {
    //   this.setParamertData({
    //     ...this.form,
    //     timeCol: val
    //   });
    // },
    // "form.timeFormat"(val) {
    //   this.setParamertData({
    //     ...this.form,
    //     timeFormat: val
    //   });
    // },
    // "form.allowedLateness"(val) {
    //   this.setParamertData({
    //     ...this.form,
    //     allowedLateness: val
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
      default: {}
    }
  },
  components: {
    adItem
  },
  data: function() {
    return {
      form: {},
      formatData: ["csv", "parquet"],
      dialogDataSetVisible: false,
      typeData: ["HDFS", "KAFKA"],
      formItemList: [],
      adformItemList: [],
      allformItemList: [],
      formItemData: [],
      adformItemData: {},
      allformItemData: [],
      currentPage: 1,
      pagesize: 8,
      aggregateArr: [],
      unWatchlist: []
    };
  },
  mounted() {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {
    ...mapActions([
      "openDialog",
      "setParamertData",
      "initOutInputData",
      "modifyLoadingStatus"
    ]),
    setUpWatchers(watchList, formList) {
      for (let i in watchList) {
        let formItem = formList[i];
        let watchItem = watchList[i];
        this.$watch(watchItem, newValue => {
          let item = {};
          item[formItem] = newValue;
          if (watchItem == "form.aggregates") {
            this.aggregateArr = newValue ? newValue : [];
          } else {
            this.setParamertData({ ...this.form, ...item });
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
        });
      }
    },
    isDeleteItem(key, value, form) {
      if (key != "slide") {
        delete form.slide;
      } else {
        form[val] = "30";
      }
    },
    inpputBlur() {
      this.form = {
        ...this.form,
        aggregates: this.aggregateArr
      };

      // console.log("form", this.form);
    },
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    addExpressions() {
      this.aggregateArr = [
        ...this.aggregateArr,
        {
          column: "",
          func: "",
          alias: ""
        }
      ];
    },
    indexMethod(index) {
      return this.pagesize * (this.currentPage - 1) + index + 1;
    },
    removeExpressions(index, rows) {
      rows.splice((this.currentPage - 1) * this.pagesize + index, 1);
      if (rows.length % this.pagesize === 0 && this.currentPage !== 1) {
        this.currentPage = this.currentPage - 1;
      }
    },
    cloneDeep(data) {
      return cloneDeep(data);
    },
    mapData(data) {
      return map(data, val => {
        return val.column || val.name;
      });
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
    initForm(val) {
      this.form = val;
      this.aggregateArr = val.aggregates;
    },
    selectDataset() {
      //this.dialogDataSetVisible = true;
      this.openDialog(true);
    },
    cancelDatasetDialog() {
      //关闭dialog
      this.dialogDataSetVisible = false;
      //调用子组件的方法清空子组件的值
      //this.$refs.dataSourceInquire.clearSelectionRow();
      // console.log(document.querySelectorAll("v-modal"));
      // document.querySelectorAll(".v-modal").remove();

      // this.openDialog(true)
    },
    submitDataSet() {},
    selectChange() {},
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

        // //formItemList base item

        // let data = this.realtime.initParametData;
        // // console.log("data", data);

        // // console.log("allformItemList", this.allformItemList);

        // this.allformItemData = {
        //   groupBy: data.groupBy
        //     ? data.groupBy
        //     : this.getValueByName(this.allformItemList, "groupBy"),
        //   aggregates: data.aggregates ? data.aggregates : [],
        //   // aggregates: data.aggregates
        //   //   ? data.aggregates
        //   //   : this.getValueByName(this.allformItemList, "aggregates"),
        //   tumble: data.tumble
        //     ? data.tumble
        //     : this.getValueByName(this.allformItemList, "tumble"),
        //   window: data.window
        //     ? data.window
        //     : this.getValueByName(this.allformItemList, "window"),
        //   slide: data.slide
        //     ? data.slide
        //     : this.getValueByName(this.allformItemList, "slide"),
        //   timeCol: data.timeCol
        //     ? data.timeCol
        //     : this.getValueByName(this.allformItemList, "timeCol"),
        //   timeFormat: data.timeFormat
        //     ? data.timeFormat
        //     : this.getValueByName(this.allformItemList, "timeFormat"),
        //   allowedLateness: data.allowedLateness
        //     ? data.allowedLateness
        //     : this.getValueByName(this.allformItemList, "allowedLateness"),
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
      if (val.name == "slide" && format != "slide") {
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
.sink-step {
  .sign {
    margin: 0px;
    color: red;
    padding: 0px;
    font-size: 8px;
  }

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
}
</style>
