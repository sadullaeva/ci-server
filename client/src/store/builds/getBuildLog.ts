import { Dispatch } from 'redux';

import buildsAPI from 'api/builds';
import Action from 'typings/action';
import BuildLog from 'typings/buildLog';

export const REQUEST_BUILD_LOG = 'getBuildLog/request';
export const RECEIVE_BUILD_LOG = 'getBuildLog/receive';
export const REJECT_BUILD_LOG = 'getBuildLog/reject';

export type RequestBuildLogAction = Action & { type: typeof REQUEST_BUILD_LOG };
export type ReceiveBuildLogAction = Action & { type: typeof RECEIVE_BUILD_LOG; payload?: BuildLog };
export type RejectBuildLogAction = Action & { type: typeof REJECT_BUILD_LOG };

export type GetBuildLogActions =
  | RequestBuildLogAction
  | ReceiveBuildLogAction
  | RejectBuildLogAction;

const requestBuildLog = (): RequestBuildLogAction => ({
  type: REQUEST_BUILD_LOG,
});

const receiveBuildLog = (payload?: BuildLog): ReceiveBuildLogAction => ({
  type: RECEIVE_BUILD_LOG,
  payload,
});

const rejectBuildLog = (): RejectBuildLogAction => ({
  type: REJECT_BUILD_LOG,
  error: true,
});

export const getBuildLog = (id: string) => {
  return (dispatch: Dispatch<GetBuildLogActions>) => {
    dispatch(requestBuildLog());
    return buildsAPI
      .getBuildLog(id)
      .then(response => {
        dispatch(receiveBuildLog(response.data));
      })
      .catch(err => {
        console.log("Couldn't get build log", err);
        dispatch(rejectBuildLog());
      });
  };
};
