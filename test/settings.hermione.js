describe('Settings', function() {
  it('Updates repository settings', function() {
    return this.browser
      .url('http://localhost:3000/settings')
      .setValue('#repoName', 'sadullaeva/shri-2020-task-2')
      .setValue('#buildCommand', 'npm ci && npm run build')
      .setValue('#mainBranch', 'master')
      .setValue('#period', '10')
      .submitForm('[data-testid=settings-page-form]');
  });
});
