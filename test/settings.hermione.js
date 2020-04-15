const deleteSettings = require('./utils/deleteSettings');

const selectors = {
  fieldError: '.text-field__error',
};

beforeEach(async function() {
  await deleteSettings();
});

afterEach(async function() {
  await deleteSettings();
});

describe('Settings', function() {
  it('Saving valid settings works correctly', function() {
    const settings = {
      repoName: 'sadullaeva/shri-2020-task-2',
      buildCommand: 'npm ci && npm run build',
      mainBranch: 'master',
      period: '10',
    };

    return this.browser.saveSettings(settings);
  });

  it('Saving invalid settings is not allowed, errors appear', function() {
    const settings = {
      repoName: '',
      buildCommand: 'npm ci && npm run build',
      mainBranch: 'master',
      period: '10',
    };

    return this.browser
      .saveSettings(settings)
      .assertExists(selectors.fieldError, 'Validation error did not appear');
  });
});
