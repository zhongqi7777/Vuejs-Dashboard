
// import Vue from "vue";
import Jsplumbchart from "./index.vue";

// const Components = {
//     Jsplumbchart
// };

// Object.keys(Components).forEach(name => {
//     Vue.component(name, Components[name]);
// });

// export default Components;

export default {
    install(Vue, options) {
      // Let's register our component globally
      // https://vuejs.org/v2/guide/components-registration.html
      Vue.component("jsplumb-chart", Jsplumbchart);
    }
  };
  