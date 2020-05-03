import util from 'util';
import child_process, { SpawnOptionsWithoutStdio } from 'child_process';

export const exec = util.promisify(child_process.exec);

export type SpawnParams = [
  string, // command
  ReadonlyArray<string>, // args?
  SpawnOptionsWithoutStdio // options?
];

export const spawn = (params: SpawnParams, onStdout = () => {}, onStderr = () => {}) =>
  new Promise((resolve, reject) => {
    const process = child_process.spawn(...params);

    process.stdout.on('data', onStdout);
    process.stderr.on('data', onStderr);
    process.on('exit', (code: number) => (code === 0 ? resolve(code) : reject(code)));
  });
