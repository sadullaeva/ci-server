import axios from 'utils/axios';

const getSettings = () => axios.get('/api/settings');

const postSettings = settings => axios.post('/api/settings', settings);

export default {
  getSettings,
  postSettings,
};
