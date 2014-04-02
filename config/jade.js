module.exports = {
  release: {
    options: {
      data: {
        debug: false,
        //~ test: chance.string( { pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', length: 23 } ),
      },
      client: true,
    },
    files: {
        "build/jade/options.js": "lib/jade/options.jade"
      //~ , "build/jade/popup.js": "lib/jade/popup.jade"
        
    },
  }
};
