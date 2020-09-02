<template>
  <div class="container">
    <div class="header">
      <h1>优先队列 PriorityQueue</h1>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
import PriorityQueue from "./lib/PriorityQueue"; //单向链表

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
    const priorityQueue = new PriorityQueue();

    priorityQueue.add(10, 1);

    priorityQueue.add(1, 10);

    // console.log(priorityQueue.peek());
    // console.log(priorityQueue.peek());

    // console.log(priorityQueue.hasValue(1));

    console.log(priorityQueue.toString());
    console.log("priorityQueue", priorityQueue);
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
