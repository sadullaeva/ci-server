import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';

import testRender from 'utils/testRender';

import BuildPage from './buildPage';

import * as getBuildActions from 'store/builds/getBuild';
import * as getBuildLogActions from 'store/builds/getBuildLog';

let container = null;
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

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  ReactDOM.unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('BuildPage', () => {
  it('requests getBuild action with the correct params', () => {
    const getBuild = jest.spyOn(getBuildActions, 'getBuild');

    testRender(
      <Route path={'/build/:id'}>
        <BuildPage />
      </Route>,
      initState,
      initHistory
    );

    expect(getBuild).toHaveBeenCalledTimes(1);
    expect(getBuild).toHaveBeenCalledWith(buildId);
  });

  it('requests getBuildLog action with correct params', () => {
    const getBuildLog = jest.spyOn(getBuildLogActions, 'getBuildLog');

    testRender(
      <Route path={'/build/:id'}>
        <BuildPage />
      </Route>,
      initState,
      initHistory
    );

    expect(getBuildLog).toHaveBeenCalledTimes(1);
    expect(getBuildLog).toHaveBeenCalledWith(buildId);
  });
});
