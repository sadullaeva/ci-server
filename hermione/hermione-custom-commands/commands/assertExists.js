const assert = require('chai').assert;

module.exports = (browser, selector, message) => {
  return browser.isExisting(selector).then(exists => assert.ok(exists, message));
};
