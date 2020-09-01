<template>
  <div class="container">
    <div class="header">
      <h1>链表 LinkedList</h1>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
import LinkedList from "./lib/LinkedList"; //单向链表
import { json } from "body-parser";

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
    // const deletedNode2 = linkedList.deleteHead();

    // let result = linkedList.toString();

    //console.log("deletedNode1", deletedNode1);
    // console.log("deletedNode2", deletedNode2);

    // console.log("result", result);

    // linkedList.append(JSON.stringify({ name: "北京" }));
    // linkedList.append(JSON.stringify({ name: "上海" }));
    // linkedList.prepend(JSON.stringify({ name: "深圳" }));
    // linkedList
    //   .append({ name: "北京" })
    //   .append({ name: "上海" })
    //   .append({ name: "深圳" })
    //   .reverse();

    // console.log("linkedList", linkedList);

    // const nodeStringifier = value => `${value.name}`;
    // let resuslt = linkedList.toString(nodeStringifier);

    // console.log("result", resuslt);

    // linkedList
    //   .append(JSON.stringify({ name: "北京" }))
    //   .append(JSON.stringify({ name: "上海" }))
    //   .append(JSON.stringify({ name: "深圳" }));

    // const node = linkedList.find({
    //   callback: value => {
    //     let node = JSON.parse(value);
    //     console.log(value);
    //     console.log(node);
    //     value === JSON.stringify({ name: "北京" });
    //   }
    // });

    //linkedList.delete(JSON.stringify({ name: "北京" }));

    // linkedList
    //   .append({ name: "北京" })
    //   .append({ name: "上海" })
    //   .append({ name: "深圳" });
    // let node = linkedList.find({ name: "深圳" });
    // console.log("node", node);

    // const comparatorFunction = (a, b) => {
    //   if (a.customValue === b.customValue) {
    //     return 0;
    //   }

    //   return a.customValue < b.customValue ? -1 : 1;
    // };

    // const linkedList = new LinkedList(comparatorFunction);

    // linkedList.append({ value: 1, customValue: { name: "北京" } });
    // // .append({ value: 2, customValue: "test2" })
    // // .append({ value: 3, customValue: "test3" });

    // const node = linkedList.find({
    //   value: { value: 1, customValue: { name: "北京" } }
    // });

    // console.log("node", node);

    // console.log("linkedList", linkedList);

    // linkedList
    //   .append({ value: 1, key: "test1" })
    //   .append({ value: 2, key: "test2" })
    //   .append({ value: 3, key: "test3" });

    // const node = linkedList.find({ callback: value => value.key === "test2" });

    // linkedList.delete({ value: 1, key: "test1" });

    //linkedList.fromArray([1, 1, 2, 3, 3, 3, 4, 5]);

    // console.log(node);
    //console.log(linkedList);
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
