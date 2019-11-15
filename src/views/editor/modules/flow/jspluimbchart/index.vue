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
              <el-button size="small" @click="reset">清空</el-button>
              <el-button size="small" @click="saveFlow">保存</el-button>
            </div></el-col
          >
        </el-row>
      </el-header>
      <el-container>
        <el-main>
          <drop class="drop-workplace" @drop="handleDrop" id="workplace">
            <jsplumbchart
              :data="{
                stepData: this.steps,
                links: this.links,
                jsPlumb: this.jsPlumb
              }"
              @handleDrop="handleDrop"
              @modifyChart="modifyChart"
              ref="jsplumbchart"
            ></jsplumbchart>
          </drop>
        </el-main>
        <el-aside width="250px">
          <vaside></vaside>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import vaside from "@/components/aside/left/index";
import jsplumbchart from "@/components/jsplumbchart/index";
import { addFlow } from "@/api/flow";
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
  components: { vaside, jsplumbchart },
  data: function() {
    return {
      input1: "",
      flowData: [],
      links: [],
      steps: [],
      jsPlumb: jsPlumb
    };
  },
  computed: {
    ...Vuex.mapState([""])
  },
  mounted() {
    console.log(this.$route.query.id);

    if(!this.$route.query.id){
      
    }
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed: function() {},
  methods: {
    //...mapActions([""]),
    handleDrop(val) {
      this.steps.push(val.drawIcon ? this.getCurrentNode(val) : val);
    },
    getCurrentNode(data) {
      let node = {
        id: data.drawIcon.id + "_" + (this.steps.length + +1),
        name: data.drawIcon.name,
        type: data.drawIcon.type,
        x: event.offsetX,
        y: event.offsetY,
        stepSettings: data.drawIcon.stepSettings
      };

      let outputConfigurations = {
        outputConfigurations: {
          output: []
        }
      };

      let inputConfigurations = {
        inputConfigurations: {
          input: []
        }
      };

      switch (data.drawIcon.type) {
        case "source":
        case "source_dummy":
          return {
            ...node,
            ...outputConfigurations
          };
        case "sink":
          return {
            ...node,
            ...inputConfigurations
          };
        default:
          return {
            ...node,
            ...inputConfigurations,
            ...outputConfigurations
          };
      }
    },
    saveFlow() {
      // console.log("this.links", this.links);
      // console.log("this.steps", this.steps);

      if (!this.input1) {
        this.$message({
          showClose: true,
          message: "流程名称不可以为空",
          type: "error"
        });

        return;
      }

      let data = {
        flowName: this.input1,
        links: this.links,
        steps: this.steps,
        date: moment().format("")
      };

      console.log(data);

      addFlow(data).then(res => {
        this.$router.go(-1);
      });
    },
    modifyChart(val) {
      this.steps = val.steps;
      this.links = val.links;
    },
    reset() {
      this.steps = [];
      this.links = [];
      this.$refs.jsplumbchart.reset();
    }
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
    position: relative;
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
