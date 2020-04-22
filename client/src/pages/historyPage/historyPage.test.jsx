import React from 'react';
import ReactDOM from 'react-dom';
import { fireEvent } from '@testing-library/react';

import testRender from 'utils/testRender';

import HistoryPage from './historyPage';

import * as getBuildsActions from 'store/builds/getBuilds';
import * as runBuildActions from 'store/builds/runBuild';

let container = null;
let getBuilds;
let runBuild;

const initState = {
  settings: {
    settings: {},
  },
  builds: {},
};

beforeAll(() => {
  getBuilds = jest.spyOn(getBuildsActions, 'getBuilds').mockReturnValue(jest.fn());
  runBuild = jest.spyOn(runBuildActions, 'runBuild').mockReturnValue(jest.fn());
});

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  ReactDOM.unmountComponentAtNode(container);
  container.remove();
  container = null;

  getBuilds.mockClear();
  runBuild.mockClear();
});

afterAll(() => {
  getBuilds.mockRestore();
  runBuild.mockRestore();
});

describe('HistoryPage', () => {
  it('requests builds history when first render', () => {
    testRender(<HistoryPage />, initState);

    expect(getBuilds).toHaveBeenCalledTimes(1);
  });

  it('opens RunBuildDialog on click "Run Build" button', () => {
    const { getByTestId } = testRender(<HistoryPage />, initState);
    fireEvent.click(getByTestId('run-build'));

    expect(document.querySelector('.run-build-dialog')).toBeVisible();
  });

  it('calls runBuild actions with the correct params', () => {
    const commitHash = '1q2w3e4';

    const { history, getByTestId } = testRender(<HistoryPage />, initState);
    fireEvent.click(getByTestId('run-build'));
    fireEvent.input(getByTestId('run-build-dialog-input'), { target: { value: commitHash } });
    fireEvent.submit(getByTestId('run-build-dialog-form'));

    expect(runBuild).toHaveBeenCalledTimes(1);
    expect(runBuild).toHaveBeenCalledWith(commitHash, history);
  });
});
