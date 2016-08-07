var webpack = require('webpack');
var buildConfig = require('./config/build-config');

var webpackConfig = {
    entry: './app/src/scripts/app.js',
    output: {
        path: './app/dist/scripts',
        filename: 'app.bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'config']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};

var providedModules = {}

if (buildConfig.testing) {
    providedModules.expect = "expect";
    providedModules.sinon = "sinon";
}

webpackConfig.plugins.push(
    new webpack.ProvidePlugin(providedModules)
)

module.exports = webpackConfig;