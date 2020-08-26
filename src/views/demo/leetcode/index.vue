<template>
  <div class="container text-center">
    <p class="text-3xl ...">栅格布局</p>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
const Base64 = require("js-base64").Base64;

import SinglyLinkedList from "@/utils/datastructure/linked/single/single";

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
    var fruits = new SinglyLinkedList();

    // add item

    // console.log("length: ", fruits.length);

    // console.log(fruits.add(fruits.length, { name: "Apple1" }));
    // console.log("length: ", fruits.length);

    // console.log(fruits.add(fruits.length, { name: "Apple2" }));
    // console.log("length: ", fruits.length);
    // console.log(fruits.add(fruits.length, { name: "Apple3" }));

    // console.log(fruits.add("", { name: "Apple7" }));

    // get item

    // fruits.add(fruits.length, { name: "Apple1" });
    // fruits.add(fruits.length, { name: "Apple2" });
    // fruits.add(fruits.length, { name: "Apple3" });
    // fruits.add(fruits.length, { name: "Apple4" });
    // fruits.add(fruits.length, { name: "Apple5" });

    // console.log(fruits.get(3));

    // delete item

    // fruits.add(fruits.length, { name: "Apple1" });
    // fruits.add(fruits.length, { name: "Apple2" });
    // fruits.add(fruits.length, { name: "Apple3" });
    // fruits.add(fruits.length, { name: "Apple4" });
    // fruits.add(fruits.length, { name: "Apple5" });

    // console.log(fruits.removeByIndex(3));
    // console.log(fruits);

    //set item

    // fruits.add(fruits.length, { name: "Apple1" });
    // fruits.add(fruits.length, { name: "Apple2" });
    // fruits.add(fruits.length, { name: "Apple3" });
    // fruits.add(fruits.length, { name: "Apple4" });
    // fruits.add(fruits.length, { name: "Apple5" });

    // console.log(fruits.set(4, "Apple7777"));
    // console.log(fruits);

    // get first item and last item

    // fruits.add(fruits.length, { name: "Apple1" });
    // fruits.add(fruits.length, { name: "Apple2" });
    // fruits.add(fruits.length, { name: "Apple3" });
    // fruits.add(fruits.length, { name: "Apple4" });
    // fruits.add(fruits.length, { name: "Apple5" });

    // // first item
    // console.log(fruits.head);

    // // last item

    // console.log(fruits.tail);

    // get SinglyLinkedList length

    //console.log(fruits.length);

    // clear all item

    // console.log(fruits.clear());
    // console.log(fruits);

    //console.log(fruits.addFirst("Apple first"));

    // console.log(fruits.addLast("Apple last"));
    // console.log(fruits);

    // console.log(fruits.toString());
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
