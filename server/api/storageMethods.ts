import axios from './axios';
import {
  GetBuildLogResponse,
  GetBuildResponse,
  GetBuildsResponse,
  PostBuildRequest,
  PostBuildResponse,
} from '../controllers/typings/builds';
import {
  GetSettingsResponse,
  PostSettingsRequest,
  PostSettingsResponse,
} from '../controllers/typings/settings';

export const getSettings = () => axios.get<GetSettingsResponse>('/conf');

export const postSettings = (body: PostSettingsRequest) =>
  axios.post<PostSettingsResponse>('/conf', body);

export const deleteSettings = () => axios.delete('/conf');

export const getBuild = (search: string) => axios.get<GetBuildResponse>(`/build/details${search}`);

export const getBuildLog = (search: string) =>
  axios.get<GetBuildLogResponse>(`/build/log${search}`);

export const getBuilds = (search: string) => axios.get<GetBuildsResponse>(`/build/list${search}`);

export const postBuild = (body: PostBuildRequest) =>
  axios.post<PostBuildResponse>('/build/request', body);
