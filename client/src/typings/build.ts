import BuildStatus from './buildStatus';

type Build = {
  id: string;
  configurationId: string;
  buildNumber: number;
  commitMessage: string;
  commitHash: string;
  branchName: string;
  authorName: string;
  status: BuildStatus;
  start?: Date;
  duration?: number;
};

export default Build;
