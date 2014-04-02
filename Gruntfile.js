(function () {
  "use strict";

  var config = {
      'copy': require('./config/copy.js')
    , 'jade': require('./config/jade.js')
    , 'jshint': require('./config/jshint.js')
    , 'stylus': require('./config/stylus.js')
    , 'crx': require('./config/chromium.js')
    , 'moz': require('./config/firefox.js')
  };

  module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig( {
        pkg: grunt.file.readJSON('package.json')

      //html templating
      , jade: config.jade

      //because jslint hurts your feelings we only jshint.
      , jshint: config.jshint

      //css preprocessor
      , stylus: config.stylus

      // firefox can only use a single dir as src, so we copy all it
      // needs together here.
      , copy: config.copy

      //~ , zip: config['zip']
      
      // used to generate chromium extension:
      , crx: config.crx

      // build firefox plugin
      , "mozilla-addon-sdk": config.moz.sdk
      , "mozilla-cfx-xpi": config.moz.xpi
      , "mozilla-cfx": config.moz.cfx

      //clean up after ourselves.
      , clean: ["build", 'tmp']
    } );

    // Load the plugin that provides the "jade" task.grunt.
    grunt.loadNpmTasks('grunt-contrib-jade');

    //load the jshint task.grunt
    grunt.loadNpmTasks('grunt-contrib-jshint');

    //load and comile the css files:
    grunt.loadNpmTasks('grunt-contrib-stylus');

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.loadNpmTasks('grunt-zip');

    grunt.loadNpmTasks('grunt-crx');

    grunt.loadNpmTasks('grunt-mozilla-addon-sdk');

    grunt.loadNpmTasks('grunt-contrib-clean');

    // tasks to do.
    grunt.registerTask( 'default', [ 'jade', 'stylus', 'jshint',  'copy', 'crx', 'mozilla-addon-sdk', 'mozilla-cfx-xpi', 'clean'] );
  };
})();
