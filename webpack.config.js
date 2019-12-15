const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // Load css
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },

      // Load javascript to babel
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },

      {
        test: /\.ico/,
        use: ['raw-loader'],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'}),
  ],

  devServer: {
    host: '0.0.0.0',
    open: true,
    contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: true,
    compress: true,
    watchOptions: {
      poll: true,
    },
  },
};
