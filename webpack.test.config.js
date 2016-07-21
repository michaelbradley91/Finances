const path = require('path');
const webpack = require('webpack');

module.exports = {
  name: 'scripts',
  entry: {
    app: './app/tests/test.js',
  },
  devtool: 'source-map',
  
  target: 'electron',
  
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '']
  },
  
  output: {
    path: path.join(__dirname, 'build'),
    filename: "[name].bundle.js",
    devtoolModuleFilenameTemplate        : '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]',
  },

  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
    ]
  },

  // Target electron is not supported
  externals: [
    (function () {
      var IGNORES = [
        'electron'
      ];
      return function (context, request, callback) {
        if (IGNORES.indexOf(request) >= 0) {
          return callback(null, "require('" + request + "')");
        }
        return callback();
      };
    })()
  ]
}