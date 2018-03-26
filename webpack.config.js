const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

// webpack.optimization.splitChunks.chunks = 'all';

module.exports = {
  entry: ["./source/js/app.js", "./source/css/styles.css"],
  output: {
    path: path.resolve(__dirname, './source'),
		filename: 'dist.js',
		chunkFilename: 'commons.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [  
			{test: /\.js$/, include: [path.resolve(__dirname, 'source/components'), path.resolve(__dirname, 'source/js')], use: 'babel-loader'},
      {test: /\.css$/, include: path.resolve(__dirname, 'source/css'), use: ['style-loader', 'css-loader']}
    ]
	},
	mode: "development",
  plugins: [
		new CleanWebpackPlugin('./source/dist.js'),
	],
  devServer: {
    contentBase: path.join(__dirname, "./source/"),
    compress: true,
    port: 3000
  }
}