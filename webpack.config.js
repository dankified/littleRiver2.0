const path = require('path');

module.exports = {
  entry: ["./source/js/app.js", "./source/css/styles.css"],
  output: {
    path: path.resolve(__dirname, './source/dist'),
    filename: 'dist.js'
  },
  module: {
    rules: [
      {test: /\.js$/, use: 'babel-loader'},
      {test: /\.css$/, use: ['style-loader', 'css-loader']}
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "./source/dist"),
    compress: true,
    port: 5000
  }
}