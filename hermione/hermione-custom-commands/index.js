const saveSettings = require('./commands/saveSettings');
const assertExists = require('./commands/assertExists');

module.exports = (hermione, opts) => {
  hermione.on(hermione.events.NEW_BROWSER, browser => {
    browser.addCommand('saveSettings', (...params) => saveSettings(browser, ...params));
    browser.addCommand('assertExists', (...params) => assertExists(browser, ...params));
  });
};
