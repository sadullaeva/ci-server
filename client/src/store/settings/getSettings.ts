import { Dispatch } from 'redux';

import settingsAPI from 'api/settings';
import Action from 'typings/action';
import Settings from 'typings/settings';

export const REQUEST_SETTINGS = 'getSettings/request';
export const RECEIVE_SETTINGS = 'getSettings/receive';
export const REJECT_SETTINGS = 'getSettings/reject';

export type RequestSettingsAction = Action & { type: typeof REQUEST_SETTINGS };
export type ReceiveSettingsAction = Action & { type: typeof RECEIVE_SETTINGS; payload?: Settings };
export type RejectSettingsAction = Action & { type: typeof REJECT_SETTINGS };

export type GetSettingsActions =
  | RequestSettingsAction
  | ReceiveSettingsAction
  | RejectSettingsAction;

const requestSettings = (): RequestSettingsAction => ({
  type: REQUEST_SETTINGS,
});

const receiveSettings = (payload?: Settings): ReceiveSettingsAction => ({
  type: RECEIVE_SETTINGS,
  payload,
});

const rejectSettings = (): RejectSettingsAction => ({
  type: REJECT_SETTINGS,
  error: true,
});

export const getSettings = () => {
  return (dispatch: Dispatch<GetSettingsActions>) => {
    dispatch(requestSettings());
    return settingsAPI
      .getSettings()
      .then(response => {
        const { data } = response.data;
        dispatch(receiveSettings(data));
      })
      .catch(err => {
        console.log("Couldn't load settings", err);
        dispatch(rejectSettings());
      });
  };
};
