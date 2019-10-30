// import Vue from 'vue'
// import Vuex from 'vuex'
import app from './modules/app'
import errorLog from './modules/errorLog'
import permission from './modules/permission'
import settings from './modules/settings'
import tagsView from './modules/tagsView'
import user from './modules/user'
import createLogger from '@/plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    app,
    errorLog,
    permission,
    settings,
    tagsView,
    user
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
