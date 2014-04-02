module.exports = {
  compile: {
    options: {
      // dont compress output
      compress: false, 
      // use embedurl('test.png') in our code to trigger Data URI embedding
      urlfunc: 'embedurl', 
    },
    //the actual files to compile
    files: {
      // compile and concat into single file
      'build/css/stylus.css': [ 'lib/stylus/*.styl' ] 
    }
  }
};
