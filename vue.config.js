const path = require('path');
const { config } = require('process');
module.exports = {
  pages: {
    index: {
      entry: 'example/main.js',
      template: 'index.html',
      filename: 'index.html'
    }
  },

  //扩张 webpack 配置， 使 packages 加入编译
  chainWebpack: config=>{
    config.module
    .rule('js')
    .include.add(path.resolve(__dirname,'packages')).end()
    .use('babel')
    .loader('babel-loader')
    .tap(options=>{
      return options
    })
  }
}
