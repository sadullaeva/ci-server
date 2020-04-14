module.exports = {
  sets: {
    common: {
      files: 'test/**/*.hermione.js',
    },
  },
  browsers: {
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
      },
    },
  },
};
