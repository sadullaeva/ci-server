import settingsAPI from 'api/settings';

export const REQUEST_SETTINGS = 'getSettings/request';
const requestSettings = () => ({
  type: REQUEST_SETTINGS,
});

export const RECEIVE_SETTINGS = 'getSettings/receive';
const receiveSettings = ({ id, repoName, buildCommand, mainBranch, period }) => ({
  type: RECEIVE_SETTINGS,
  payload: {
    id,
    repoName,
    buildCommand,
    mainBranch,
    period,
  },
});

export const REJECT_SETTINGS = 'getSettings/reject';
const rejectSettings = () => ({
  type: REJECT_SETTINGS,
  error: true,
});

export const getSettings = () => {
  return dispatch => {
    dispatch(requestSettings());
    return settingsAPI
      .getSettings()
      .then(response => {
        dispatch(receiveSettings(response.data));
      })
      .catch(err => {
        console.log("Couldn't load settings", err);
        dispatch(rejectSettings());
      });
  };
};
