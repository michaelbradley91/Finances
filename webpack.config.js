const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
  {
    name: 'styles',
    entry: {
      style: './app/styles/site.less'
    },
    target: 'web',
    devtool: 'source-map',

    output: {
      path: path.join(__dirname, 'build'),
      filename: "[name].css",
      devtoolModuleFilenameTemplate        : '[absolute-resource-path]',
      devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]',
    },

    module: {
      loaders: [
        { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") }
      ]
    },
    
    plugins: [
      new ExtractTextPlugin("[name].css")
    ]
  },
  {
    name: 'scripts',
    entry: {
      app: './app/scripts/main.ts',
    },
    target: 'electron',
    devtool: 'source-map',
	
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
    
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  }
]