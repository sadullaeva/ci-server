import axios from 'utils/axios';

const getSettings = async () => axios.get('/api/settings');

export default {
  getSettings,
};
