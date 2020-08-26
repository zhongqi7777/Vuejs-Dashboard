<template>
  <div class="container text-center">
    <p class="text-3xl ...">栅格布局</p>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
const Base64 = require("js-base64").Base64;

import LinkedList from "@/utils/datastructure/linked/single/single";

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
  data: function () {
    return {};
  },
  computed: {
    //...mapState([""])
  },
  mounted() {
    var fruits = new LinkedList();
    fruits.addNode("Apple");
    fruits.addNode("Banana");
    fruits.addNode("Pear");

    // console.log(fruits.addNode("Pear4"));

    console.log(fruits.removeNode("Banana"));
    //console.log("fruits", fruits);

    // console.log("linked list length", fruits.length);
    // fruits.insert("Apple", "head");
    // // fruits.insert("Banana", "Apple");
    // // fruits.insert("Pear", "Banana");
    // console.log("fruits", fruits);
    // console.log("display", fruits.display()); // Apple
    // console.log("findPrev", fruits.findPrev("111"));
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed: function () {},
  methods: {
    //...mapActions([""]),
  },
};
</script>

<style lang="scss"></style>
