import buildsAPI from 'api/builds';

export const REQUEST_RUN_BUILD = 'runBuild/request';
const requestRunBuild = () => ({
  type: REQUEST_RUN_BUILD,
});

export const RECEIVE_RUN_BUILD = 'runBuild/receive';
const receiveRunBuild = () => ({
  type: RECEIVE_RUN_BUILD,
});

export const REJECT_RUN_BUILD = 'runBuild/reject';
const rejectRunBuild = () => ({
  type: REJECT_RUN_BUILD,
  error: true,
});

export const validateCommitHash = commitHash => {
  let valid = true;
  let errors = {};

  if (!commitHash) {
    valid = false;
    errors.commitHash = 'This field should not be empty';
    return [valid, errors];
  }

  return [valid, errors];
};

export const runBuild = (commitHash, history) => {
  return dispatch => {
    dispatch(requestRunBuild());
    return buildsAPI
      .postBuild(commitHash)
      .then(response => {
        const { data } = response.data;
        dispatch(receiveRunBuild());
        history.push(`/build/${data.id}`);
      })
      .catch(err => {
        console.log("Couldn't run build", err);
        dispatch(rejectRunBuild());
      });
  };
};
