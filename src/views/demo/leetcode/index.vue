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
  data: function() {
    return {};
  },
  computed: {
    //...mapState([""])
  },
  mounted() {
    var fruits = new LinkedList();
    // fruits.addNode("Apple");
    // fruits.addNode("Banana");
    // fruits.addNode("Pear");

    // console.log(fruits.removeNode("Banana"));

    fruits.add({ name: "Apple" });
    fruits.add({ name: "Banana" });
    fruits.add({ name: "Pear" });

    fruits.removeByIndex(0);

    console.log(fruits);

    // console.log(fruits.removeNode({ name: "Banana" }));

    //console.log("find item", fruits.get(1));
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

<style lang="scss"></style>
