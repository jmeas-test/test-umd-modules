module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    webpack: {
      options: {
        entry: './src/index.js',
        resolve: {
          alias: {
            marionette: 'backbone.marionette',
            _: 'underscore'
          },
          modulesDirectories: ['node_modules']
        },
        cache: true
      },
      dev: {
        output: {
          path: './build/',
          filename: 'script.js',
          pathinfo: true
        },
        devtool: 'eval-source-map',
        debug: true
      }
    }
  });

  grunt.registerTask('build', ['webpack']);
};
