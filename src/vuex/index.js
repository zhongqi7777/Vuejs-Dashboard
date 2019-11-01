// import Vue from 'vue'
// import Vuex from 'vuex'
import getters from "./getters";
import app from "./modules/app";
import errorLog from "./modules/errorLog";
import permission from "./modules/permission";
import settings from "./modules/settings";
import tagsView from "./modules/tagsView";
import user from "./modules/user";
import createLogger from "@/plugins/logger";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

const vuexPersisted = new createPersistedState({
  key: "myVuex",
  storage: window.localStorage,
  reducer: state => ({
    // PK: {
    //   multipleSelection: state.pk.multipleSelection,
    //   stepData: state.pk.stepData
    // },
  })
  // filter: mutation => (
  //   'CHANGE_LOADING' === mutation.type
  // )
});

export default new Vuex.Store({
  getters,
  modules: {
    app,
    errorLog,
    permission,
    settings,
    tagsView,
    user
  },
  strict: debug,
  // plugins: debug ? [createLogger()] : []
  plugins: debug ? [createLogger(), vuexPersisted] : [vuexPersisted]
});
