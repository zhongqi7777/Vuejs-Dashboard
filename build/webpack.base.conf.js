"use strict";
const path = require("path");
const utils = require("./utils");
const config = require("../config");
const vueLoaderConfig = require("./vue-loader.conf");
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: "eslint-loader",
  enforce: "pre",
  include: [resolve("src"), resolve("test")],
  options: {
    formatter: require("eslint-friendly-formatter"),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
});

module.exports = {
  // externals: {
  //   "vue-router": "VueRouter",
  //   vue: "Vue",
  //   axios: "axios",
  //   "element-ui": "ELEMENT",
  //   vuex: "Vuex"
  // },
  context: path.resolve(__dirname, "../"),
  entry: {
    app: "./src/main.js"
  },
  plugins: [
    new VueLoaderPlugin(), // Vue加载
    // copy custom static assets
    // new CopyWebpackPlugin([
    //   {
    //     from: path.resolve(__dirname, '../static'),
    //     to: 'static',
    //     ignore: ['.*']
    //   }
    // ]),
    // 让 moment.js 中的语言文件，按需加载。使用的时候配置即可。没有导入的语言文件不会被加载。
    // 默认情况下，加载moment.js会导入全部的语言文件。
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
  output: {

    path: config.build.assetsRoot,
    filename: "[name].js",
    // filename: '[name].[hash].js',
    publicPath:
      process.env.NODE_ENV === "production"
        ? config.build.assetsPublicPath
        : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": resolve("src"),
      // jquery: "jquery",
      // "jquery-ui": "jquery-ui"
    }
  },
  module: {
    rules: [
      // ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [
          resolve("src"),
          resolve("test"),
          resolve("node_modules/webpack-dev-server/client")
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        exclude: [resolve("src/icons")],
        options: {
          limit: 10000,
          name: utils.assetsPath("img/[name].[hash:7].[ext]")
        }
      },
      // {
      //   test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      //   exclude: [resolve("src/icons")],
      //   loader: [
      //     "url-loader?limit=10000&name=" +
      //       utils.assetsPath("img/[name].[hash:7].[ext]"),
      //     "image-webpack-loader"
      //   ]
      // },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("media/[name].[hash:7].[ext]")
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("fonts/[name].[hash:7].[ext]")
        }
      },
      {
        test: /\.svg$/,
        loader: "svg-sprite-loader",
        include: [resolve("src/icons")],
        options: {
          symbolId: "icon-[name]"
        }
      }
      // {
      //   test: /\.scss$/,
      //   use: [
      //     "style-loader", // creates style nodes from JS strings
      //     "css-loader", // translates CSS into CommonJS
      //     "sass-loader" // compiles Sass to CSS, using Node Sass by default
      //   ]
      // }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: "empty",
    fs: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty"
  }
};
