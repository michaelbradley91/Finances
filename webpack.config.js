const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './app/main.ts',
  target: 'electron',
  devtool: 'source-map',

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },

  // Location and filename pattern of the
  // final build output files.
  output: {
    path: path.join(__dirname, 'build'),
    filename: "app.bundle.js",
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
  ]
}