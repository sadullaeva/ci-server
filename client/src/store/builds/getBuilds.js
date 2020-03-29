import buildsAPI from 'api/builds';

export const REQUEST_BUILDS = 'getBuilds/request';
const requestBuilds = () => ({
  type: REQUEST_BUILDS,
});

export const RECEIVE_BUILDS = 'getBuilds/receive';
const receiveBuilds = payload => ({
  type: RECEIVE_BUILDS,
  payload,
});

export const REJECT_BUILDS = 'getBuilds/reject';
const rejectBuilds = () => ({
  type: REJECT_BUILDS,
  error: true,
});

export const getBuilds = () => {
  return dispatch => {
    dispatch(requestBuilds());
    return buildsAPI
      .getBuilds({ limit: 20, offset: 0 })
      .then(response => {
        const { data } = response.data;
        dispatch(receiveBuilds(data));
      })
      .catch(err => {
        console.log("Couldn't get builds", err);
        dispatch(rejectBuilds());
      });
  };
};
