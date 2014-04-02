module.exports = {
  sdk: {
    'master': {
      options: {
        revision: "master",
        github: true,
        // github_user: "mozilla" // default value
        dest_dir: "mozilla-addon-sdk"  //  default value
      }
    }
  },
  xpi: {
    'stable': {
      options: {
          "mozilla-addon-sdk": "master"
        , extension_dir: "build/firefox/"
        , dist_dir: "out/"
        , arguments: "--strip-sdk" // builds smaller xpis
      }
    },
  },
  cfx: {
    'run_stable': {
      options: {
          "mozilla-addon-sdk": "master"
        , extension_dir: "out"
        , command: "run"
      }
    }
  }
};
