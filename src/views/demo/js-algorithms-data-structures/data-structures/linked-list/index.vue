<template>
  <div class="container">
    <div class="header">
      <h1>LinkedList</h1>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
import LinkedList from "./lib/LinkedList"; //单向链表

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
  mounted() {
    const linkedList = new LinkedList();

    // linkedList.append(1);
    // linkedList.append(2);

    //linkedList.delete(JSON.stringify({ name: "北京" }));

    //const deletedNode1 = linkedList.deleteTail();
    const deletedNode2 = linkedList.deleteHead();

    // let result = linkedList.toString();

    //console.log("deletedNode1", deletedNode1);
    // console.log("deletedNode2", deletedNode2);

    // console.log("result", result);

    // linkedList.append(JSON.stringify({ name: "北京" }));
    // linkedList.append(JSON.stringify({ name: "上海" }));
    // linkedList.prepend(JSON.stringify({ name: "深圳" }));
    linkedList
      .append({ name: "北京" })
      .append({ name: "上海" })
      .append({ name: "深圳" })
      .reverse();

    // console.log("linkedList", linkedList);

    // const nodeStringifier = value => `${value.name}`;
    // let resuslt = linkedList.toString(nodeStringifier);

    // console.log("result", resuslt);

    const node = linkedList.find({ callback: value => value.name === "上海" });

    console.log("node", node);
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
