module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    webpack: {
      options: {
        entry: {
          'app-router': './src/app-router.js',
          application: './src/application.js',
          behavior: './src/behavior.js',
          behaviors: './src/behaviors.js',
          callbacks: './src/callbacks.js',
          'collection-view': './src/collection-view.js',
          'composite-view': './src/composite-view.js',
          controller: './src/controller.js',
          'item-view': './src/item-view.js',
          'layout-view': './src/layout-view.js',
          module: './src/module.js',
          'region-manager': './src/region-manager.js',
          region: './src/region.js',
          renderer: './src/renderer.js',
          'template-cache': './src/template-cache.js',
          object: './src/object.js',
          view: './src/view.js'
        },
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
          filename: '[name].js',
          pathinfo: true
        },
        devtool: 'eval-source-map',
        debug: true
      }
    }
  });

  grunt.registerTask('build', ['webpack']);
};
