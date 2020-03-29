import { REQUEST_RUN_BUILD, RECEIVE_RUN_BUILD, REJECT_RUN_BUILD } from './runBuild';

const initState = {
  loading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case REQUEST_RUN_BUILD: {
      return {
        ...state,
        loading: true,
      };
    }
    case RECEIVE_RUN_BUILD: {
      return {
        ...state,
        loading: false,
      };
    }
    case REJECT_RUN_BUILD: {
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
