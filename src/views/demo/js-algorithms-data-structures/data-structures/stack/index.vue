<template>
  <div class="container">
    <div class="header">
      <h1>Stack</h1>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
import Stack from "./lib/Stack"; //单向链表

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
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    let peek = stack.peek();

    let result = stack.toString();

    console.log(result);
    console.log("peek", peek);
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
