<template>
  <div class="container">
    <div class="header">
      <h1>图 Graph {有向图 directed 无向图 undirected}</h1>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
import Graph from "./lib/Graph";
import GraphVertex from "./lib/GraphVertex"; // 图
import GraphEdge from "./lib/GraphEdge"; //边

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
  components: {},
  data: function() {
    return {};
  },
  computed: {
    //...mapState([""])
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
.container {
  display: flex;
  flex-direction: column;
  height: 100%;

  .header {
    height: 100px;
    display: flex;
    justify-content: center;
  }

  .content {
    flex: 1;
  }
}
</style>
