import path from 'path';
import * as child_process from './childProcess';

export default async (commitHash: string): Promise<string> => {
  const repoPath = path.resolve(__dirname, '../ci-repo');
  const { stdout: authorName = '' } = await child_process.exec(
    `git -C ${repoPath} log -1 --format="%an" ${commitHash}`
  );
  return authorName.trim();
};
