import { Dispatch } from 'redux';

import buildsAPI from 'api/builds';
import Action from 'typings/action';
import Build from 'typings/build';

export const REQUEST_BUILD = 'getBuild/request';
export const RECEIVE_BUILD = 'getBuild/receive';
export const REJECT_BUILD = 'getBuild/reject';

export type RequestBuildAction = Action & { type: typeof REQUEST_BUILD };
export type ReceiveBuildAction = Action & { type: typeof RECEIVE_BUILD; payload?: Build };
export type RejectBuildAction = Action & { type: typeof REJECT_BUILD };

export type GetBuildActions = RequestBuildAction | ReceiveBuildAction | RejectBuildAction;

const requestBuild = (): RequestBuildAction => ({
  type: REQUEST_BUILD,
});

const receiveBuild = (payload?: Build): ReceiveBuildAction => ({
  type: RECEIVE_BUILD,
  payload,
});

const rejectBuild = (): RejectBuildAction => ({
  type: REJECT_BUILD,
  error: true,
});

export const getBuild = (id: string) => {
  return (dispatch: Dispatch<GetBuildActions>) => {
    dispatch(requestBuild());
    return buildsAPI
      .getBuild(id)
      .then(response => {
        const { data } = response.data;
        dispatch(receiveBuild(data));
      })
      .catch(err => {
        console.log("Couldn't get build", err);
        dispatch(rejectBuild());
      });
  };
};
