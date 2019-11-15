<template>
  <div class="jspluimbchart">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="18"
            ><div class="grid-content">
              <el-input placeholder="请输入内容" v-model="input1">
                <template slot="prepend">流程名称</template>
              </el-input>
            </div></el-col
          >
          <el-col :span="6" justify="space-around"
            ><div class="grid-content bg-purple-light">
              <el-button size="small">清空</el-button>
              <el-button size="small">保存</el-button>
            </div></el-col
          >
        </el-row>
      </el-header>
      <el-container>
        <el-main></el-main>
        <el-aside width="250px">
          <vaside :stepList="[]"></vaside>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import vaside from "@/components/aside/left/index";
// import { mapGetters, mapActions, mapState } from "vuex";
import _ from "lodash";

export default {
  watch: {
    // flowData(val) {
    // }
  },
  props: {
    // data: {
    //   type: Object,
    //   default: false
    // }
  },
  components: { vaside },
  data: function() {
    return {
      input1: "",
      stepList: []
    };
  },
  computed: {
    ...Vuex.mapState([""])
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
    //...mapActions([""]),
  }
};
</script>

<style lang="scss">
.jspluimbchart {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff;

  .el-aside {
    background-color: #d3dce6;
    color: #333;
    // text-align: center;
    line-height: 200px;
  }

  .el-container {
    height: 100%;
  }

  .el-main {
    background-image: url("../../../../../assets/editor/designBg.png");
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
    height: 100%;
  }
  .el-col {
    border-radius: 4px;
    height: 100%;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    // background: #e5e9f2;
    display: flex;
    justify-content: start;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 25px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
}
</style>
