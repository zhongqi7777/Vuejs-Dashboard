<template>
  <div class="container">
    <div class="header">
      <h1>哈希表(散列) HashTable</h1>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
import HashTable from "./lib/HashTable"; //单向链表

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
    //const defaultHashTable = new HashTable();
    // const biggerHashTable = new HashTable(64);
    //const biggerHashTable = new HashTable(128);
    //console.log(defaultHashTable.buckets.length);
    //console.log(biggerHashTable.buckets.length);
    // const hashTable = new HashTable();
    // console.log(hashTable.hash("a"));
    // console.log(hashTable.hash("b"));
    //console.log(hashTable.hash("c"));
    // hashTable.set("a", "sky-old");
    // // hashTable.set("a", "sky");
    // hashTable.set("b", "sea");
    // hashTable.set("c", "earth");
    // hashTable.set("d", "ocean");
    // hashTable.set("objectKey", { prop1: "a", prop2: "b" });
    // const object = hashTable.get("objectKey");
    //console.log(hashTable.hash("x"));
    // const stringifier = value => `${value.key}:${value.value}`;
    // console.log(hashTable.get("a"));
    // hashTable.delete("a");
    // console.log(hashTable.get("a"));
    // console.log("object", object);
    // const hashTable = new HashTable(3);
    // hashTable.set("a", "sky-old");
    // hashTable.set("a", "sky");
    // hashTable.set("b", "sea");
    // hashTable.set("c", "earth");
    // hashTable.set("d", "ocean");
    // console.log(hashTable.getKeys());
    // console.log(hashTable.get("a"));
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
