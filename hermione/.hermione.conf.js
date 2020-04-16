module.exports = {
  baseUrl: process.env.BASE_URL,
  gridUrl: `${process.env.GRID_URL}/wd/hub`,

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

  plugins: {
    'html-reporter/hermione': {
      path: 'hermione-html-report',
    },
    'hermione-custom-commands': true,
  },
};
