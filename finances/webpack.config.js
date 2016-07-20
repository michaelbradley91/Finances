const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './app/tsapp.ts',
  target: 'electron',
  devtool: 'source-map',

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },

  // Location and filename pattern of the
  // final build output files.
  output: {
    path: path.join(__dirname, 'server'),
    filename: "server.js",
    devtoolModuleFilenameTemplate        : '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]',
  },

  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],

  node: {
    __dirname: true
  }
}