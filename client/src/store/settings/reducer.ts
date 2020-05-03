import {
  REQUEST_SETTINGS,
  RECEIVE_SETTINGS,
  REJECT_SETTINGS,
  GetSettingsActions,
} from './getSettings';
import {
  REJECT_UPDATE,
  RECEIVE_UPDATE,
  REQUEST_UPDATE,
  SET_VALIDITY,
  UpdateSettingsActions,
} from './updateSettings';
import { CLEAR_VALIDATION, ClearValidationAction } from './clearState';
import { SettingsErrors, SettingsValid } from './helpers/validateSettings';
import Settings from 'typings/settings';

export type SettingsState = {
  loading: boolean;
  settings: Settings | null;
  valid: SettingsValid;
  errors: SettingsErrors;
};

export type SettingsActions = GetSettingsActions | UpdateSettingsActions | ClearValidationAction;

const initState: SettingsState = {
  loading: false,
  settings: null,
  valid: true,
  errors: {},
};

export default (state = initState, action: SettingsActions): SettingsState => {
  switch (action.type) {
    case REQUEST_SETTINGS: {
      return {
        ...state,
        loading: true,
      };
    }
    case RECEIVE_SETTINGS: {
      return {
        ...state,
        settings: action.payload.id ? action.payload : null,
        loading: false,
      };
    }
    case REJECT_SETTINGS: {
      return {
        ...state,
        loading: false,
      };
    }
    case REQUEST_UPDATE: {
      return {
        ...state,
        loading: true,
      };
    }
    case RECEIVE_UPDATE: {
      return {
        ...state,
        settings: action.payload,
        loading: false,
      };
    }
    case REJECT_UPDATE: {
      return {
        ...state,
        loading: false,
        valid: false,
        errors: {
          general:
            'Could not update settings. Please make sure you have the correct access rights and the repository exists.',
        },
      };
    }
    case SET_VALIDITY: {
      return {
        ...state,
        valid: action.payload.valid,
        errors: action.payload.errors,
      };
    }
    case CLEAR_VALIDATION: {
      return {
        ...state,
        valid: true,
        errors: {},
      };
    }
    default: {
      return state;
    }
  }
};
