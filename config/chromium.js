module.exports = {
  myHostedPackage: {
    "src": "build/chromium",
    "dest": "out/",
    "baseURL": "http://github.com/jaeh/browser-extension-packager/",
    //~ "exclude": [ ".git", ".svn" ],
    "privateKey": "./chromium.pem",
    "options": {
      "maxBuffer": 3000 * 1024 //build extension with a weight up to 3MB
    }
  }
};
