var webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      'app/tests/**/*.ts'
    ],
    exclude: [
    ],
    preprocessors: {
      'app/tests/**/*.ts': ['webpack', 'electron'],
    },
    webpack: {
      module: {
        loaders: [
          { test: /\.ts$/, exclude: /node_modules/, loader: 'ts-loader' },
          { test: /\.tsx?$/, exclude: /node_modules/, loader: 'ts-loader' }
        ]
      },
      resolve: {
        extensions: ['.ts', '.js', '.tsx', '.jsx', '']
      },
      target: 'electron'
    },
    reporters: ['progress', 'html'],
 
    // the default configuration 
    htmlReporter: {
      outputDir: 'karma_html', // where to put the reports  
      templatePath: null, // set if you moved jasmine_template.html 
      focusOnFailures: true, // reports show failures on start 
      namedFiles: false, // name files instead of creating sub-directories 
      pageTitle: null, // page title for reports; browser info by default 
      urlFriendlyName: false, // simply replaces spaces with _ for files/dirs 
      reportName: 'report-summary-filename', // report summary filename; browser info by default 
      
      // experimental 
      preserveDescribeNesting: false, // folded suites stay folded  
      foldAll: false, // reports start folded (only with preserveDescribeNesting) 
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Electron'],
    singleRun: false,
    concurrency: Infinity,
    client: {
      useIframe: false
    }
  })
}