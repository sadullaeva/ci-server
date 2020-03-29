import axios from 'utils/axios';

const postBuild = commitHash => axios.post(`/api/builds/${commitHash}`);

export default {
  postBuild,
};
