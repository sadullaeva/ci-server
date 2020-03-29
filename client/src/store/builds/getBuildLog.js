import buildsAPI from 'api/builds';

export const REQUEST_BUILD_LOG = 'getBuildLog/request';
const requestBuildLog = () => ({
  type: REQUEST_BUILD_LOG,
});

export const RECEIVE_BUILD_LOG = 'getBuildLog/receive';
const receiveBuildLog = payload => ({
  type: RECEIVE_BUILD_LOG,
  payload,
});

export const REJECT_BUILD_LOG = 'getBuildLog/reject';
const rejectBuildLog = () => ({
  type: REJECT_BUILD_LOG,
  error: true,
});

export const getBuildLog = id => {
  return dispatch => {
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
