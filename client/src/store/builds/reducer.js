import { REQUEST_RUN_BUILD, RECEIVE_RUN_BUILD, REJECT_RUN_BUILD } from './runBuild';
import { REQUEST_BUILDS, RECEIVE_BUILDS, REJECT_BUILDS } from './getBuilds';
import { REQUEST_BUILD, RECEIVE_BUILD, REJECT_BUILD } from './getBuild';

const initState = {
  loading: false,
  builds: [],
  build: null,
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
    case REQUEST_BUILDS: {
      return {
        ...state,
        loading: true,
      };
    }
    case RECEIVE_BUILDS: {
      return {
        ...state,
        loading: false,
        builds: action.payload,
      };
    }
    case REJECT_BUILDS: {
      return {
        ...state,
        loading: false,
      };
    }
    case REQUEST_BUILD: {
      return {
        ...state,
        loading: true,
      };
    }
    case RECEIVE_BUILD: {
      return {
        ...state,
        loading: false,
        build: action.payload,
      };
    }
    case REJECT_BUILD: {
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
