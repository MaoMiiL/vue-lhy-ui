const path = require('path')

module.exports = {
  entry: "./packages/index.js", // 入口文件

  output: { // 修改输出文件到 dist 下

    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',

    // filename: 'build.js'
    filename: "vue-lhy-ui.min.js", // 生成的文件名
    library: "vue-lhy-ui", // 指定的就是你使用require时的模块名
    libraryTarget: "umd", // 会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的
    umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
  },
}
