<template>
  <div class="formitem">
    <!-- {{data.tab.title}} -->
    <component :is="setTemplate(data.step.type)" :data="data.step"></component>
    <!-- <adItem></adItem> -->
  </div>
</template>

a
<script>
import { mapGetters, mapActions, mapState } from "vuex";
import adItem from "./formitem/common/index";
import sink from "./formitem/sink";
import filter from "./formitem/filter";
import source from "./formitem/source"; //source_dummy
import source_dummy from "./formitem/source_dummy";
import aggregate from "./formitem/aggregate";
import sql from "./formitem/sql";
import transform from "./formitem/transform";
import join from "./formitem/join";
import lookup from "./formitem/lookup";
import split from "./formitem/split";

export default {
  watch: {},
  props: {
    data: {
      type: Object,
      default: false
    }
  },
  components: {
    adItem
  },
  data: function() {
    return {};
  },

  mounted() {
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed: function() {},
  methods: {
    setTemplate(val) {
      switch (val) {
        case "sink":
          return sink;
        case "filter":
          return filter;
        case "source":
          return source;
        case "source_dummy":
          return source_dummy;
        case "aggregate":
          return aggregate;
        case "sql":
          return sql;
        case "transform":
          return transform;
        case "join":
          return join;
        case "lookup":
          return lookup;
        case "split":
          return split;
        default:
          "";
      }
    }
  }
};
</script>

<style lang="scss">
.formitem {
  .advanced-options {
    width: 100%;
    text-align: left;
    color: #3e98fe;
    margin: 0px;
    height: 40px;
    line-height: 40px;
  }
  .adop-title {
    width: 100%;
    text-align: center;
    font-weight: normal;
    font-size: 20px;
    margin: 0px;
    height: 40px;
    line-height: 40px;
  }
}
</style>
