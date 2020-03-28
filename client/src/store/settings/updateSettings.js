import settingsAPI from 'api/settings';
import { minsToMs } from 'utils/date';

export const REQUEST_UPDATE = 'updateSettings/request';
const requestUpdate = () => ({
  type: REQUEST_UPDATE,
});

export const RECEIVE_UPDATE = 'updateSettings/receive';
const receiveUpdate = payload => ({
  type: RECEIVE_UPDATE,
  payload,
});

export const REJECT_UPDATE = 'updateSettings/reject';
const rejectUpdate = () => ({
  type: REJECT_UPDATE,
  error: true,
});

export const validateSettings = settings => {
  let valid = true;
  let errors = {};

  if (!settings) {
    valid = false;
    errors.general = 'There are no settings provided';
    return [valid, errors];
  }

  const { repoName, buildCommand } = settings;

  if (!repoName) {
    valid = false;
    errors.repoName = 'Repository name should not be empty';
  }
  if (!buildCommand) {
    valid = false;
    errors.buildCommand = 'Build command should not be empty';
  }

  return [valid, errors];
};

export const normalizeSettings = settings => {
  return {
    repoName: settings.repoName.trim(),
    buildCommand: settings.buildCommand.trim(),
    mainBranch: settings.mainBranch ? settings.mainBranch.trim() : 'master',
    period: settings.period ? minsToMs(parseFloat(settings.period.trim())) : 0,
  };
};

export const updateSettings = settings => {
  return dispatch => {
    const normalizedSettings = normalizeSettings(settings);
    dispatch(requestUpdate());
    return settingsAPI
      .postSettings(normalizedSettings)
      .then(response => {
        dispatch(receiveUpdate(normalizedSettings));
      })
      .catch(err => {
        console.log("Couldn't update settings", err);
        dispatch(rejectUpdate());
      });
  };
};
