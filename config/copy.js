/*
 * The Firefox Xpi Grunt Task only allows us to use a single dir as
 * srcdir. So we copy the needed files together here before compiling.
 */

module.exports = {
  main: {
    files: [
      {
          expand: true
        //remove folderstructures
        , flatten: true
        // browser specific source dir and its sub-directories
        , src: [
              'browsers/firefox/**'
            , 'lib/js/*'
            , 'lib/img/**'
            , 'build/jade/**'
            , 'build/css/**'
          ]
        //save the files in the build directory
        , dest: 'build/firefox/'
        //only copy files, not dirs
        , filter: 'isFile'
      },
      {
          expand: true
        , flatten: true
        , src: [
            'browsers/chromium/**'
          , 'lib/js/*'
          , 'lib/img/'
          , 'lib/img/**'
          ]
        , dest: 'build/chromium/'
        , filter: 'isFile'
      },
      {
          expand: true
        , flatten: true
        , src: [
            'build/jade/*'
          ]
        , dest: 'build/chromium/jade/'
        , filter: 'isFile'
      },
      {
          expand: true
        , flatten: true
        , src: [
            'build/css/*'
          ]
        , dest: 'build/chromium/css/'
        , filter: 'isFile'
      },
      {
          expand: true
        , flatten: true
        , src: [
            'build/jade/*'
          ]
        , dest: 'build/firefox/jade/'
        , filter: 'isFile'
      },
      {
          expand: true
        , flatten: true
        , src: [
            'build/css/*'
          ]
        , dest: 'build/firefox/css/'
        , filter: 'isFile'
      }
    ]
  }
};
