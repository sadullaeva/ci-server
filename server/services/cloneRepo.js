const path = require('path');
const { spawn, exec } = require('child_process');

module.exports = (repoName, mainBranch) =>
  new Promise((resolve, reject) => {
    const cwd = path.resolve(__dirname, '..');
    const folderName = 'ci-repo';

    exec(`rm -rf ${cwd}/${folderName}`, () => {
      const gitClone = spawn(
        'git',
        ['clone', '-b', mainBranch, `git@github.com:${repoName}.git`, folderName],
        { cwd }
      );

      gitClone.stdout.pipe(process.stdout);
      gitClone.stderr.pipe(process.stdout);
      gitClone.on('exit', code => {
        console.log(`Cloning child process exited with code ${code}`);
        if (code === 0) {
          resolve();
        } else {
          reject();
        }
      });
    });
  });
