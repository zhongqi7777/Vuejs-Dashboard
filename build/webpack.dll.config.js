const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const resolve = (dir) => path.join(__dirname, '../', dir);

// dll文件存放的目录
// const dllPath = 'public/vendor'
const dllPath = '../static/js'

module.exports = {
  entry: {
    vendor: ['vue/dist/vue.esm.js', 'lodash', 'vuex', 'axios', 'vue-router', 'element-ui', "fuse.js", 'js-cookie', 'jsplumb', 'moment', 'panzoom', 'vue-count-to', 'vue-drag-drop', 'vue-i18n', 'vue-meta', 'vuex-persistedstate'],
    //lodash: ['lodash']
  },
  output: {
    path: path.join(__dirname, dllPath),
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    // 清除之前的dll文件
    new CleanWebpackPlugin(['*.*'], {
      root: path.join(__dirname, dllPath)
    }),
    new webpack.DllPlugin({
      path: path.join(__dirname, ".", '[name]-manifest.json'),
      name: '[name]_library',
      context: __dirname
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}