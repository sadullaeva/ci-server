const path = require('path');
const child_process = require('./childProcess');

module.exports = async commitHash => {
  const repoPath = path.resolve(__dirname, '../ci-repo');
  const { stdout: authorName = '' } = await child_process.exec(
    `git -C ${repoPath} log -1 --format="%an" ${commitHash}`
  );
  return authorName.trim();
};
