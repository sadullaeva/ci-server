import axios from './axios';

export const getSettings = () => axios.get('/conf');

export const postSettings = (body: any) => axios.post('/conf', body);

export const deleteSettings = () => axios.delete('/conf');

export const getBuild = (search: any) => axios.get(`/build/details${search}`);

export const getBuildLog = (search: any) => axios.get(`/build/log${search}`);

export const getBuilds = (search: any) => axios.get(`/build/list${search}`);

export const postBuild = (body: any) => axios.post('/build/request', body);

export const startBuild = (body: any) => axios.post('/build/start', body);

export const finishBuild = (body: any) => axios.post('/build/finish', body);

export const cancelBuild = (body: any) => axios.post('/build/cancel', body);
