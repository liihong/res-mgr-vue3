module.exports = {
  devServer: {
    port: 8088, // 端口号
    host: '127.0.0.1',
    disableHostCheck:true,
    open: true, //配置自动启动浏览器
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:9000',
        pathRewrite: {
          '^/api': ''
        },
        ws: true,
        changeOrigin: true
      }
    }
  },
  css: {
      loaderOptions: {
          less: {
              javascriptEnabled: true,
          }
      }
  },
}