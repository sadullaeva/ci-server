import React from 'react';
import ReactDOM from 'react-dom';
import { fireEvent } from '@testing-library/react';

import testRender from 'utils/testRender';

import HistoryPage from './historyPage';

import * as getBuildsActions from 'store/builds/getBuilds';

let container = null;
const initState = {
  settings: {
    settings: {},
  },
  builds: {},
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

describe('HistoryPage', () => {
  it('requests builds history when first render', () => {
    const getBuilds = jest.spyOn(getBuildsActions, 'getBuilds');

    testRender(<HistoryPage />, initState);

    expect(getBuilds).toHaveBeenCalledTimes(1);
  });

  it('opens RunBuildDialog on click "Run Build" button', () => {
    const { getByTestId } = testRender(<HistoryPage />, initState);
    fireEvent.click(getByTestId('run-build'));

    expect(document.querySelector('.run-build-dialog')).toBeVisible();
  });
});
