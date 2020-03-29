import { REQUEST_SETTINGS, RECEIVE_SETTINGS, REJECT_SETTINGS } from './getSettings';
import { REJECT_UPDATE, RECEIVE_UPDATE, REQUEST_UPDATE } from './updateSettings';
import { SET_VALIDITY } from './updateSettings';

const initState = {
  loading: false,
  settings: null,
  valid: true,
  errors: {},
};

export default (state = initState, action) => {
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
    default: {
      return state;
    }
  }
};
