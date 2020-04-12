const path = require('path');
const child_process = require('./childProcess');

module.exports = async commitHash => {
  const repoPath = path.resolve(__dirname, '../ci-repo');
  const { stdout: commitMessage = '' } = await child_process.exec(
    `git -C ${repoPath} log -1 --format="%s" ${commitHash}`
  );
  return commitMessage.trim();
};
