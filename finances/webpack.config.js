const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './app/main.js',
  target: 'electron',
  devtool: 'source-map',

  // Location and filename pattern of the
  // final build output files.
  output: {
    path: path.join(__dirname, 'app'),
    filename: "app.bundle.js"
  },

  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  
  plugins: [
  ],

  node: {
    __dirname: true
  }
}