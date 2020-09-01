<template>
  <div class="container">
    <div class="header">
      <h1>doubly-linked-list</h1>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
import DoublyLinkedList from "./lib/DoublyLinkedList"; //单向链表

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
    const linkedList = new DoublyLinkedList();
    linkedList.append(1);
    linkedList.append(2);

    console.log("linkedList.head.next.value", linkedList.head.next.value);
    console.log(
      "linkedList.tail.previous.value",
      linkedList.tail.previous.value
    );

    console.log("linkedList.toString()", linkedList.toString());
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
