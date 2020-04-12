import React from 'react';
import ReactDOM from 'react-dom';

import testRender from 'utils/testRender';

import HistoryPage from './historyPage';

import * as getBuildsActions from 'store/builds/getBuilds';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  ReactDOM.unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('HistoryPage', () => {
  it('requests builds history when first render', () => {
    const initState = {
      settings: {
        settings: {},
      },
      builds: {},
    };
    const getBuilds = jest.spyOn(getBuildsActions, 'getBuilds');

    testRender(<HistoryPage />, initState);

    expect(getBuilds).toHaveBeenCalledTimes(1);
  });
});
