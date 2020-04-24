import Build from 'typings/build';

export type GetBuildResponse = {
  data?: Build;
};

export type GetBuildLogResponse = {
  data?: string;
};

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
