import path from 'path';
import * as child_process from '../utils/childProcess';

export default async (repoName: string, mainBranch: string): Promise<void> => {
  const cwd = path.resolve(__dirname, '..');
  const folderName = 'ci-repo';

  try {
    await child_process.exec(`rm -rf ${cwd}/${folderName}`);
    await child_process.spawn([
      'git',
      ['clone', '-b', mainBranch, `https://github.com/${repoName}.git`, folderName],
      { cwd },
    ]);
  } catch (e) {
    console.log('Could not clone the repo', e);
  }
};
