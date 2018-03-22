const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: ["./source/js/app.js", "./source/css/styles.css"],
  output: {
    path: path.resolve(__dirname, './source/dist'),
    filename: 'dist.js'
  },
  // devtool: 'inline-source-map',
  module: {
    rules: [  
      {test: /\.js$/, use: 'babel-loader'},
      {test: /\.css$/, use: ['style-loader', 'css-loader']}
    ]
  },
  plugins: [
    new CleanWebpackPlugin('./source/dist')
  ]
}