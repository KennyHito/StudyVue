const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages: {
    index: {
      entry: './src/main.js',
    },
  },
  //关闭语法检查
  lintOnSave: false,
  //开启代理服务器(方式一)
  // devServer: {
  //   proxy: 'http://localhost:5000',
  // },
  //开启代理服务器（方式二）
	devServer: {
    proxy: {
      // xs代表本地服务器学生接口
      '/xs': {
        target: 'http://localhost:5000',
				pathRewrite:{'^/xs':''},// 重写路径把xs替换成空
        // ws: true, //用于支持websocket(默认值true)
        // changeOrigin: true //用于控制请求头中的host值(默认值true)
      },
      //qc代表本地服务器汽车接口
      '/qc': {
        target: 'http://localhost:5001',
				pathRewrite:{'^/qc':''},//重写路径把qc替换成空
        // ws: true, //用于支持websocket(默认值true)
        // changeOrigin: true //用于控制请求头中的host值(默认值true)
      },
      '/we':{
        target:'http://t.weather.itboy.net',
        pathRewrite:{'^/we':''},//重写路径把we替换成空
      }
    }
  }
})
