import Build from 'typings/build';
import BuildLog from 'typings/buildLog';

export type GetBuildResponse = {
  data?: Build;
};

export type GetBuildLogResponse = BuildLog;

export type GetBuildsRequest = {
  limit: number;
  offset: number;
};

export type GetBuildsResponse = {
  data?: Array<Build>;
};

export type PostBuildResponse = {
  data?: Build;
};
