var webpack = require("webpack")
const path = require('path')
module.exports = {
  mode: 'development',
  entry: {
    main: "./source-src/js/main.js",
    style: "./source-src/css/style.js"
  },
  output: {
    path: path.resolve(__dirname, "./source"),
    publicPath: "/source/",
    filename: "[name].js"
  },
  module: {
    rules: [{
      test: /\.s[ac]ss$/i,
      use: [
        // 将 JS 字符串生成为 style 节点
        'style-loader',
        // 将 CSS 转化成 CommonJS 模块
        'css-loader',
        // 将 Sass 编译成 CSS
        'sass-loader',
      ],
    }, , {
      test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
      use: 'url-loader?limit=50000&name=[path][name].[ext]'
    }]
  },
  watch: true
}
