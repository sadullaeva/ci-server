import axios from 'utils/axios';

const getSettings = async () => axios.get('/settings');

export default {
  getSettings,
};
