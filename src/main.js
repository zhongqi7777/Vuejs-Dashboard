// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "@babel/polyfill";
// import Vue from "vue";
import App from "./App";
import router from "./router";
import i18n from "./lang"; // Internationalization
import Cookies from "js-cookie";
import store from "./vuex";
import "@/utils/dialogDrag";


//vue 鼠标事件控制台警告Added non-passive event listener to a scroll-blocking 'mousewheel' event. Consider marking event handler as 'passive' to make the page more responsive
import 'default-passive-events'

// import "normalize.css/normalize.css"; // A modern alternative to CSS resets
// import "./styles/element-variables.scss";
// import "font-awesome/css/font-awesome.min.css";
// import "./assets/fonts/iconfont.css";

// import "./styles/index.scss"; // global css

// import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";

import "normalize.css/normalize.css"; // A modern alternative to CSS resets

// import ElementUI from 'element-ui'
import "./styles/element-variables.scss";

import "@/styles/index.scss"; // global css

import "./icons"; // icon

import VueMeta from "vue-meta";

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
});

import VueDragDrop from "vue-drag-drop"; //https://github.com/cameronhimself/vue-drag-drop

Vue.use(VueDragDrop);

Vue.use(ELEMENT, {
  size: Cookies.get("size") || "medium", // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  i18n,
  store
});

console.log("test");
