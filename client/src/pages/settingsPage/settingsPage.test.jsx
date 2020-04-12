import React from 'react';
import ReactDOM from 'react-dom';
import { fireEvent } from '@testing-library/react';

import testRender from 'utils/testRender';

import SettingsPage from './settingsPage';

import * as updateSettingsActions from 'store/settings/updateSettings';

let container = null;
const initState = {
  settings: {
    settings: null,
    loading: false,
    valid: true,
    errors: {},
  },
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

describe('SettingsPage', () => {
  it('calls updateSettings actions with the correct params', () => {
    const updateSettings = jest.spyOn(updateSettingsActions, 'updateSettings');
    const settings = {
      repoName: 'sadullaeva/shri-2020-task-2',
      buildCommand: 'npm i && npm run build',
      mainBranch: 'master',
      period: '600000',
    };

    const { getByTestId } = testRender(<SettingsPage />, initState);
    fireEvent.input(getByTestId('settings-page-repo-name'), {
      target: { value: settings.repoName },
    });
    fireEvent.input(getByTestId('settings-page-build-command'), {
      target: { value: settings.buildCommand },
    });
    fireEvent.input(getByTestId('settings-page-main-branch'), {
      target: { value: settings.mainBranch },
    });
    fireEvent.input(getByTestId('settings-page-period'), { target: { value: settings.period } });
    fireEvent.submit(getByTestId('settings-page-form'));

    expect(updateSettings).toHaveBeenCalledTimes(1);
    expect(updateSettings).toHaveBeenCalledWith(settings);
  });
});
