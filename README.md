# Vuejs-Dashboard

vuejs dashbord webpack vuex jsplumbchart

<span id="top">目录</span>

- [√ 配置多环境变量]
- [√ 配置 proxy 跨域]
- [√ 压缩图片]
- [√ 添加打包分析]
- [√ 配置 externals 引入 cdn 资源]
- [√ 支持 seo]
- [√ 去掉 console.log]
- [√ 开启 gzip 压缩]
- [√ 为 sass 提供全局样式，以及全局变量]
- [√ 添加 IE 兼容]
- [√ 配置多项目模式]
- [√ webpack 启动之后自动打开首页]
- [√ webpack 构建完成之后服务器自动部署]

备注 npm run 参数说明
baseurl 默认值 "http://localhost:8080/" baseurl 根路径,如果不显示设置默认获取当前服务器地址
baseenv 默认值 "mock" 代理环境
baseproject 默认值 "project1" 项目名称 (此处值对应 view/login/文件下文件名称)

示例
npm run dev --baseurl=http://localhost.dev:9000/ --baseenv=api --baseproject=project2

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev (默认开启dev模式mock环境,即 baseurl="http://localhost:8080/" baseenv="mock")


显示指定开发环境

npm run dev --baseurl=http://localhost.dev/ --baseenv=mock

显示指定生产环境

npm run dev --baseurl=http://localhost.pro/ --baseenv=api --host=192.168.31.74

# build for production and view the bundle analyzer report
npm run build --report


dev mode when vpn is connected

npm run dev --host=192.168.31.74

#json server
npm run nodemon-server-routes:vpn

dev mode normally

npm run dev

#json server
npm run nodemon-server-routes


package describe

vue-drag-drop
https://github.com/cameronhimself/vue-drag-drop
```
