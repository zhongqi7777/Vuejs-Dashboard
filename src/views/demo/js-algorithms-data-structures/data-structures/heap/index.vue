<template>
  <div class="container">
    <div class="header">
      <h1>堆 (最大堆& 最小堆) Heap</h1>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
import Heap from "./lib/Heap";
import MaxHeap from "./lib/MaxHeap";
import MinHeap from "./lib/MinHeap";

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
    // const heap = new Heap();
    // heap.add(5);
    //console.log(heap.toString());

    const maxHeap = new MaxHeap();

    maxHeap.add(5);
    maxHeap.add(7);
    maxHeap.add(9);

    console.log(maxHeap.isEmpty());
    console.log(maxHeap.toString());
    maxHeap.poll();
    //maxHeap.poll();
    console.log(maxHeap.peek());
    // console.log(maxHeap.poll());
    console.log(maxHeap.toString());
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
