module.exports = {
  options: {
    curly: true,
    eqeqeq: true,
    eqnull: true,
    browser: true,
    laxcomma: true,
    globals: {
      jQuery: true
    },
  },
  uses_defaults: [
      'Gruntfile.js'
    , 'browsers/**/*.js'
    , 'lib/js/*.js'
  ],
};
