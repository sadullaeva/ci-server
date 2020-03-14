const path = require('path');
const { exec } = require('child_process');
const promisifyChildProcess = require('./promisifyChildProcess');

module.exports = commitHash => {
  let commitMessage;
  const repoPath = path.resolve(__dirname, '../ci-repo');
  const child = exec(`git -C ${repoPath} log -1 --format="%s" ${commitHash}`);
  child.stdout.on('data', data => {
    commitMessage = data;
  });
  return promisifyChildProcess(child).then(() => commitMessage.trim());
};
