const util = require('util');
const child_process = require('child_process');

exports.exec = util.promisify(child_process.exec);

exports.spawn = (params, onStdout = () => {}, onStderr = () => {}) =>
  new Promise((resolve, reject) => {
    const process = child_process.spawn(...params);

    process.stdout.on('data', onStdout);
    process.stderr.on('data', onStderr);
    process.on('exit', code => (code === 0 ? resolve(code) : reject(code)));
  });
