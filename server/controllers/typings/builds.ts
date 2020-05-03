import Build from '../../typings/build';
import BuildLog from '../../typings/buildLog';

export type GetBuildsQueryParams = {
  limit: number;
  offset: number;
};

export type GetBuildsResponse = {
  data?: Array<Build>;
};

export type PostBuildRequestParams = {
  commitHash: string;
};

export type PostBuildRequest = {
  commitHash: string;
  commitMessage: string;
  branchName: string;
  authorName: string;
};

export type PostBuildResponse = {
  data?: Build;
};

export type GetBuildRequestParams = {
  buildId: string;
};

export type GetBuildResponse = {
  data?: Build;
};

export type GetBuildLogRequestParams = {
  buildId: string;
};

export type GetBuildLogResponse = BuildLog;
