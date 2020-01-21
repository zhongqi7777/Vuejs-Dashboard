
// import Vue from "vue";
import Jsplumbchart from "./index.vue";

const Components = {
    Jsplumbchart
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;