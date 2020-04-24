import axios from 'utils/axios';

import {
  GetBuildResponse,
  GetBuildLogResponse,
  GetBuildsRequest,
  GetBuildsResponse,
  PostBuildResponse,
} from './typings/builds';

const getBuild = (id: string) => axios.get<GetBuildResponse>(`/api/builds/${id}`);

const getBuildLog = (id: string) => axios.get<GetBuildLogResponse>(`/api/builds/${id}/logs`);

const getBuilds = ({ limit, offset }: GetBuildsRequest) =>
  axios.get<GetBuildsResponse>(`/api/builds?limit=${limit}&offset=${offset}`);

const postBuild = (commitHash: string) =>
  axios.post<PostBuildResponse>(`/api/builds/${commitHash}`);

export default {
  getBuild,
  getBuildLog,
  getBuilds,
  postBuild,
};
