jest.mock('utils/axios');

import axios from 'utils/axios';

import buildsApi from './builds';

beforeAll(() => {
  axios.get.mockReturnValue(Promise.resolve());
  axios.post.mockReturnValue(Promise.resolve());
});

afterEach(() => {
  axios.get.mockClear();
  axios.post.mockClear();
});

describe('builds API', () => {
  it('getBuild calls axios.get with correct args', async () => {
    const id = '1';

    await buildsApi.getBuild(id);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/api/builds/1');
  });

  it('getBuildLog calls axios.get with correct args', async () => {
    const id = '1';

    await buildsApi.getBuildLog(id);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/api/builds/1/logs');
  });

  it('getBuilds calls axios.get with correct args', async () => {
    const params = { limit: 20, offset: 0 };

    await buildsApi.getBuilds(params);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/api/builds?limit=20&offset=0');
  });

  it('postBuild calls axios.post with correct args', async () => {
    const commitHash = '1q2w3e4';

    await buildsApi.postBuild(commitHash);

    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith('/api/builds/1q2w3e4');
  });
});
