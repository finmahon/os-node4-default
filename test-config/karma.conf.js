var webpackConfig = require('./webpack.test.js');

module.exports = function (config) {
  var _config = {
    basePath: '',

    frameworks: ['jasmine'],

    // reporters configuration
    reporters: ['mocha'],

    files: [{
      pattern: './karma-test-shim.js',
      watched: true
    }],

    // reporter options
    mochaReporter: {
      colors: {
        success: 'cyan',
        info: 'bgGreen',
        warning: 'yellow',
        error: 'bgRed'
      },
      symbols: {
        success: '+',
        info: '#',
        warning: '!',
        error: 'x'
      },
      // output: 'autowatch'
    },

    preprocessors: {
      './karma-test-shim.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['Chrome'],
    singleRun: true
  };

  config.set(_config);
};
