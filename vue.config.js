module.exports = {
  devServer: {
    port: 8088, // 端口号
    host: '127.0.0.1',
    disableHostCheck:true,
    https: true, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
  //   proxy: {
  //       '/api': {
  //           target: 'http://127.0.0.1',
  //           pathRewrite: {
  //               '^/api': ''
  //           },
  //           ws: true,
  //           changeOrigin: true
  //       }
  //   }
  // },
  css: {
      loaderOptions: {
          less: {
              javascriptEnabled: true,
          }
      }
  },
}