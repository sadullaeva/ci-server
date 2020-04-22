import settingsAPI from 'api/settings';
import validateSettings from './helpers/validateSettings';
import normalizeSettings from './helpers/normalizeSettings';

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

export const SET_VALIDITY = 'updateSettings/setValidity';
export const setValidity = ([valid, errors]) => ({
  type: SET_VALIDITY,
  payload: { valid, errors },
});

export const updateSettings = settings => {
  return dispatch => {
    const [valid, errors] = validateSettings(settings);
    if (valid) {
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
    } else {
      dispatch(setValidity([valid, errors]));
    }
  };
};
