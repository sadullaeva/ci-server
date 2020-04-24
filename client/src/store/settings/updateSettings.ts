import { Dispatch } from 'redux';

import settingsAPI from 'api/settings';
import validateSettings, { SettingsErrors, SettingsValid } from './helpers/validateSettings';
import normalizeSettings from './helpers/normalizeSettings';
import Action from 'typings/action';
import Settings from 'typings/settings';

export const REQUEST_UPDATE = 'updateSettings/request';
export const RECEIVE_UPDATE = 'updateSettings/receive';
export const REJECT_UPDATE = 'updateSettings/reject';
export const SET_VALIDITY = 'updateSettings/setValidity';

export type RequestUpdateAction = Action & { type: typeof REQUEST_UPDATE };
export type ReceiveUpdateAction = Action & {
  type: typeof RECEIVE_UPDATE;
  payload: Omit<Settings, 'id'>;
};
export type RejectUpdateAction = Action & { type: typeof REJECT_UPDATE };
export type SetValidityAction = Action & { type: typeof SET_VALIDITY };

export type UpdateSettingsActions =
  | RequestUpdateAction
  | ReceiveUpdateAction
  | RejectUpdateAction
  | SetValidityAction;

const requestUpdate = (): RequestUpdateAction => ({
  type: REQUEST_UPDATE,
});

const receiveUpdate = (payload: Omit<Settings, 'id'>): ReceiveUpdateAction => ({
  type: RECEIVE_UPDATE,
  payload,
});

const rejectUpdate = (): RejectUpdateAction => ({
  type: REJECT_UPDATE,
  error: true,
});

export const setValidity = ([valid, errors]: [
  SettingsValid,
  SettingsErrors
]): SetValidityAction => ({
  type: SET_VALIDITY,
  payload: { valid, errors },
});

export const updateSettings = (settings: {
  repoName: string;
  buildCommand: string;
  mainBranch: string;
  period: string;
}) => {
  return (dispatch: Dispatch<UpdateSettingsActions>) => {
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
