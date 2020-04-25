import path from 'path';
import * as child_process from './childProcess';

export default async (commitHash: string): Promise<string> => {
  const repoPath = path.resolve(__dirname, '../ci-repo');
  const { stdout: commitMessage = '' } = await child_process.exec(
    `git -C ${repoPath} log -1 --format="%s" ${commitHash}`
  );
  return commitMessage.trim();
};
