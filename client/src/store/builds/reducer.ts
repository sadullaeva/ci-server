import { REQUEST_BUILD, RECEIVE_BUILD, REJECT_BUILD, GetBuildActions } from './getBuild';
import { REQUEST_BUILDS, RECEIVE_BUILDS, REJECT_BUILDS, GetBuildsActions } from './getBuilds';
import { CLEAR_STATE, ClearStateAction } from './clearState';
import {
  REQUEST_RUN_BUILD,
  RECEIVE_RUN_BUILD,
  REJECT_RUN_BUILD,
  RunBuildActions,
} from './runBuild';
import {
  REQUEST_BUILD_LOG,
  RECEIVE_BUILD_LOG,
  REJECT_BUILD_LOG,
  GetBuildLogActions,
} from './getBuildLog';
import Build from 'typings/build';
import BuildLog from 'typings/buildLog';

export type BuildsState = {
  loading: boolean;
  logLoading: boolean;
  limit: number;
  offset: number;
  hasMore: boolean;
  builds: Array<Build>;
  build: Build | null;
  log: BuildLog | null;
};

export type BuildsActions =
  | GetBuildActions
  | GetBuildsActions
  | RunBuildActions
  | GetBuildLogActions
  | ClearStateAction;

const initState: BuildsState = {
  loading: false,
  logLoading: false,
  limit: 20,
  offset: 0,
  hasMore: true,
  builds: [],
  build: null,
  log: null,
};

export default (state = initState, action: BuildsActions): BuildsState => {
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
      const { payload: builds = [] } = action;
      const hasMore = builds.length === state.limit;
      const offset = state.offset + builds.length;
      return {
        ...state,
        loading: false,
        builds: [...state.builds, ...builds],
        hasMore,
        offset,
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
    case REQUEST_BUILD_LOG: {
      return {
        ...state,
        logLoading: true,
      };
    }
    case RECEIVE_BUILD_LOG: {
      return {
        ...state,
        logLoading: false,
        log: action.payload,
      };
    }
    case REJECT_BUILD_LOG: {
      return {
        ...state,
        logLoading: false,
      };
    }
    case CLEAR_STATE: {
      return {
        ...initState,
      };
    }
    default: {
      return state;
    }
  }
};
