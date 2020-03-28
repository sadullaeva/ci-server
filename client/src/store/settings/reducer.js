import { REQUEST_SETTINGS, RECEIVE_SETTINGS, REJECT_SETTINGS } from './getSettings';

const initState = {
  loading: false,
  settings: null,
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
    default: {
      return state;
    }
  }
};
