import axios from 'utils/axios';

import { GetSettingsResponse, PostSettingsRequest } from './typings/settings';

const getSettings = () => axios.get<GetSettingsResponse>('/api/settings');

const postSettings = (settings: PostSettingsRequest) => axios.post('/api/settings', settings);

export default {
  getSettings,
  postSettings,
};
