<template>
  <div class="container">
    <div class="header">
      <h1>二叉查找树 BinarySearchTree</h1>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
import BinarySearchTree from "./lib/BinarySearchTree"; //单向链表

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
    const bst = new BinarySearchTree();
    bst.insert(10);
    bst.insert(20);
    // bst.remove(10);
    // bst.insert(5);
    console.log("bst", bst);
    console.log("bst.root", bst.root);
    console.log("bst.left", bst.left);
    console.log("bst.right", bst.root.right);
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
