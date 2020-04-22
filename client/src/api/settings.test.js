jest.mock('utils/axios');

import axios from 'utils/axios';

import settingsApi from './settings';

beforeAll(() => {
  axios.get.mockReturnValue(Promise.resolve());
  axios.post.mockReturnValue(Promise.resolve());
});

afterEach(() => {
  axios.get.mockClear();
  axios.post.mockClear();
});

describe('settings API', () => {
  it('getSettings calls axios.get with correct args', async () => {
    await settingsApi.getSettings();

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/api/settings');
  });

  it('postSettings calls axios.post with correct args', async () => {
    const settings = {
      repoName: 'sadullaeva/shri-2020-task-2',
      buildCommand: 'npm i && npm run build',
      mainBranch: 'master',
      period: 600000,
    };

    await settingsApi.postSettings(settings);

    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith('/api/settings', settings);
  });
});
