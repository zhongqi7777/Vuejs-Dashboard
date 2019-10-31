# vue-cli2 全面配置
<span id="top">目录</span>

- [√ 配置多环境变量]
- [√ 配置 proxy 跨域]
- [√ 压缩图片]
- [√ 添加打包分析]
- [√ 配置 externals 引入cdn资源]
- [√ 支持seo]
- [√ 去掉 console.log]
- [√ 开启 gzip 压缩]
- [√ 为 sass 提供全局样式，以及全局变量]
- [√ 添加 IE 兼容]

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev (默认开启dev模式mock环境,即 baseurl="http://localhost:8080/" baseenv="mock") 


显示指定开发环境

npm run dev --baseurl=http://localhost.dev/ --baseenv=api

显示指定生产环境

npm run dev --baseurl=http://localhost.pro/ --baseenv=api
# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report