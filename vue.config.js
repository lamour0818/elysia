// const webpack = require('webpack')
// const path = require('path')
module.exports = {
  // outputDir: 'asda',
  // 保存使用 EsLint 检查
  lintOnSave: true,
  publicPath: './',
  // 如果不需要打包生成文件名中hash值，可以将其设置为 false
  filenameHashing: false,
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  configureWebpack: {
    // resolve: {
    //   extensions: ['.js', '.vue', '.json'],
    //   alias: {
    //     jquery: path.resolve(__dirname, './node_modules/jquery/src/jquery.js')
    //   }
    // }
  },
  devServer: {
    port: 8080,
    host: '0.0.0.0',
    hot: true
  }
}
