import React from 'react';
import ReactDOM from 'react-dom';

import testRender from 'utils/testRender';

import BuildPage from './buildPage';

import * as getBuildActions from 'store/builds/getBuild';
import * as getBuildLogActions from 'store/builds/getBuildLog';

let container = null;
let getBuild;
let getBuildLog;

const buildId = '1';
const initState = {
  builds: {
    build: null,
    log: null,
    logLoading: false,
  },
  settings: {
    settings: {},
  },
};
const initHistory = {
  initialEntries: [`/build/${buildId}`],
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '1' }),
}));

beforeAll(() => {
  getBuild = jest.spyOn(getBuildActions, 'getBuild').mockReturnValue(jest.fn());
  getBuildLog = jest.spyOn(getBuildLogActions, 'getBuildLog').mockReturnValue(jest.fn());
});

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  ReactDOM.unmountComponentAtNode(container);
  container.remove();
  container = null;

  getBuild.mockClear();
  getBuildLog.mockClear();
});

afterAll(() => {
  getBuild.mockRestore();
  getBuildLog.mockRestore();
});

describe('BuildPage', () => {
  it('requests getBuild action with the correct params', () => {
    testRender(<BuildPage />, initState, initHistory);

    expect(getBuild).toHaveBeenCalledTimes(1);
    expect(getBuild).toHaveBeenCalledWith(buildId);
  });

  it('requests getBuildLog action with correct params', () => {
    testRender(<BuildPage />, initState, initHistory);

    expect(getBuildLog).toHaveBeenCalledTimes(1);
    expect(getBuildLog).toHaveBeenCalledWith(buildId);
  });
});
