const path = require('path');
const { exec } = require('child_process');
const promisifyChildProcess = require('./promisifyChildProcess');

module.exports = commitHash => {
  let authorName;
  const repoPath = path.resolve(__dirname, '../ci-repo');
  const child = exec(`git -C ${repoPath} log -1 --format="%an" ${commitHash}`);
  child.stdout.on('data', data => {
    authorName = data;
  });
  return promisifyChildProcess(child).then(() => authorName.trim());
};
