module.exports = (browser, settings) => {
  const url = 'http://localhost:3000/settings';
  const selectors = {
    form: '[data-testid=settings-page-form]',
    repoName: '#repoName',
    buildCommand: '#buildCommand',
    mainBranch: '#mainBranch',
    period: '#period',
  };

  return browser
    .url(url)
    .setValue(selectors.repoName, settings.repoName)
    .setValue(selectors.buildCommand, settings.buildCommand)
    .setValue(selectors.mainBranch, settings.mainBranch)
    .setValue(selectors.period, settings.period)
    .submitForm(selectors.form);
};
