// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const { join } = require('path');
const { constants } = require('karma');

module.exports = () => {
  return {
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-coverage')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: join(__dirname, '../../coverage'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    preprocessors: {
      'src/app/**/*.js': ['coverage']
    },
    coverageReporter: {
      type: 'lcov',
      dir: '../../coverage/'
    },
    reporters: ['progress', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: constants.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true
  };
};
