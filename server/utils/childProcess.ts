import util from 'util';
import child_process from 'child_process';

export const exec = util.promisify(child_process.exec);

export const spawn = (params: object, onStdout = () => {}, onStderr = () => {}) =>
  new Promise((resolve, reject) => {
    // @ts-ignore
    const process = child_process.spawn(...params);

    process.stdout.on('data', onStdout);
    process.stderr.on('data', onStderr);
    process.on('exit', (code: number) => (code === 0 ? resolve(code) : reject(code)));
  });
