const assert = require('chai').assert;
const deleteSettings = require('../utils/deleteSettings');

const rootUrl = process.env.BASE_URL;
const buildUrl = `${process.env.BASE_URL}/build/`;
const selectors = {
  runBuildButton: '[data-testid=run-build]',
  runBuildForm: '[data-testid=run-build-dialog-form]',
  commitHashInput: '#commitHash',
  loader: '[data-testid=loader]',
  loaderHidden: '[data-testid=loader]:not(.loader_show)',
};

beforeEach(async function() {
  await deleteSettings();
});

afterEach(async function() {
  await deleteSettings();
});

describe('Run build', function() {
  it('Adds commit into the queue and comes to the new build page', function() {
    const settings = {
      repoName: 'sadullaeva/shri-2020-task-2',
      buildCommand: 'npm ci && npm run build',
      mainBranch: 'master',
      period: '10',
    };
    const commitHash = '0c18c66';

    function loaderDisappeared() {
      return this.browser.isExisting(selectors.loaderHidden);
    }

    return this.browser
      .saveSettings(settings)
      .waitUntil(loaderDisappeared.bind(this), 10000)
      .url(rootUrl)
      .waitForExist(selectors.runBuildButton)
      .click(selectors.runBuildButton)
      .setValue(selectors.commitHashInput, commitHash)
      .submitForm(selectors.runBuildForm)
      .getUrl(url => {
        const isOnBuildPage = new RegExp(`${buildUrl}(.*)`).test(url);
        console.log('URLLLLLLLLLLLL', url);
        assert.ok(isOnBuildPage, 'Displayed page is not a Build page');
      });
  });
});
