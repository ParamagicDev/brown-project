const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {},
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'}),
  ],
};
