import axios from 'utils/axios';

const getBuild = id => axios.get(`/api/builds/${id}`);

const getBuildLog = id => axios.get(`/api/builds/${id}/logs`);

const getBuilds = ({ limit, offset }) => axios.get(`/api/builds?limit=${limit}&offset=${offset}`);

const postBuild = commitHash => axios.post(`/api/builds/${commitHash}`);

export default {
  getBuild,
  getBuildLog,
  getBuilds,
  postBuild,
};
