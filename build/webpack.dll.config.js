const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

// dll文件存放的目录
// const dllPath = 'public/vendor'
const dllPath = '../vendor'

module.exports = {
  entry: {
    vendor: ['vue/dist/vue.esm.js', 'lodash', 'vuex', 'axios', 'vue-router', 'element-ui', "fuse.js", 'js-cookie', 'jsplumb', 'moment', 'panzoom', 'vue-count-to', 'vue-drag-drop', 'vue-i18n', 'vue-meta', 'vuex-persistedstate']
  },
  output: {
    path: path.join(__dirname, dllPath),
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  // entry: {
  //   // 需要提取的库文件
  //   vendor: ['vue', 'vue-router', 'vuex', 'axios', 'element-ui']
  // },
  // output: {
  //   path: path.join(__dirname, dllPath),
  //   filename: '[name].dll.js',
  //   // vendor.dll.js中暴露出的全局变量名
  //   // 保持与 webpack.DllPlugin 中名称一致
  //   library: '[name]_[hash]'
  // },
  plugins: [
    // 清除之前的dll文件
    new CleanWebpackPlugin(['*.*'], {
      root: path.join(__dirname, dllPath)
    }),
    // 设置环境变量
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: 'production'
    //   }
    // }),
    // manifest.json 描述动态链接库包含了哪些内容
    // new webpack.DllPlugin({
    //   path: path.join(__dirname, dllPath, '[name]-manifest.json'),
    //   // 保持与 output.library 中名称一致
    //   name: '[name]_[hash]',
    //   // context: process.cwd()
    //   context: __dirname
    // })

    new webpack.DllPlugin({
      path: path.join(__dirname, dllPath, '[name]-manifest.json'),
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


// "dll": "webpack --config ./build/webpack.dll.config.js",