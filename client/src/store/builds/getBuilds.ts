import { Dispatch } from 'redux';

import buildsAPI from 'api/builds';
import Action from 'typings/action';
import Build from 'typings/build';
import { State } from 'store/store';

export const REQUEST_BUILDS = 'getBuilds/request';
export const RECEIVE_BUILDS = 'getBuilds/receive';
export const REJECT_BUILDS = 'getBuilds/reject';

export type RequestBuildsAction = Action & { type: typeof REQUEST_BUILDS };
export type ReceiveBuildsAction = Action & { type: typeof RECEIVE_BUILDS; payload: Array<Build> };
export type RejectBuildsAction = Action & { type: typeof REJECT_BUILDS };

export type GetBuildsActions = RequestBuildsAction | ReceiveBuildsAction | RejectBuildsAction;

const requestBuilds = (): RequestBuildsAction => ({
  type: REQUEST_BUILDS,
});

const receiveBuilds = (payload: Array<Build>): ReceiveBuildsAction => ({
  type: RECEIVE_BUILDS,
  payload,
});

const rejectBuilds = (): RejectBuildsAction => ({
  type: REJECT_BUILDS,
  error: true,
});

export const getBuilds = () => {
  return (dispatch: Dispatch<GetBuildsActions>, getState: () => State) => {
    const { builds } = getState();
    const { limit, offset, hasMore } = builds;
    if (hasMore) {
      dispatch(requestBuilds());
      return buildsAPI
        .getBuilds({ limit, offset })
        .then(response => {
          const { data = [] } = response.data;
          dispatch(receiveBuilds(data));
        })
        .catch(err => {
          console.log("Couldn't get builds", err);
          dispatch(rejectBuilds());
        });
    }
  };
};
