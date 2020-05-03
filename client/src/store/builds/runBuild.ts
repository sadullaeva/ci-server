import buildsAPI from 'api/builds';
import Action from '../../typings/action';
import { MemoryHistory } from 'history';
import { Dispatch } from 'redux';

export const REQUEST_RUN_BUILD = 'runBuild/request';
export const RECEIVE_RUN_BUILD = 'runBuild/receive';
export const REJECT_RUN_BUILD = 'runBuild/reject';

export type RequestRunBuildAction = Action & { type: typeof REQUEST_RUN_BUILD };
export type ReceiveRunBuildAction = Action & { type: typeof RECEIVE_RUN_BUILD };
export type RejectRunBuildAction = Action & { type: typeof REJECT_RUN_BUILD };

export type RunBuildActions = RequestRunBuildAction | ReceiveRunBuildAction | RejectRunBuildAction;

const requestRunBuild = (): RequestRunBuildAction => ({
  type: REQUEST_RUN_BUILD,
});

const receiveRunBuild = (): ReceiveRunBuildAction => ({
  type: RECEIVE_RUN_BUILD,
});

const rejectRunBuild = (): RejectRunBuildAction => ({
  type: REJECT_RUN_BUILD,
  error: true,
});

export const runBuild = (commitHash: string, history: MemoryHistory) => {
  return (dispatch: Dispatch<RunBuildActions>) => {
    dispatch(requestRunBuild());
    return buildsAPI
      .postBuild(commitHash)
      .then(response => {
        const { data } = response.data;
        dispatch(receiveRunBuild());
        if (data) {
          history.push(`/build/${data.id}`);
        }
      })
      .catch(err => {
        console.log("Couldn't run build", err);
        dispatch(rejectRunBuild());
      });
  };
};
