import buildsAPI from 'api/builds';

export const REQUEST_BUILD = 'getBuild/request';
const requestBuild = () => ({
  type: REQUEST_BUILD,
});

export const RECEIVE_BUILD = 'getBuild/receive';
const receiveBuild = payload => ({
  type: RECEIVE_BUILD,
  payload,
});

export const REJECT_BUILD = 'getBuild/reject';
const rejectBuild = () => ({
  type: REJECT_BUILD,
  error: true,
});

export const getBuild = id => {
  return dispatch => {
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
