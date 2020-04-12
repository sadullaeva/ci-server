const validateCommitHash = commitHash => {
  let valid = true;
  let errors = {};

  if (!commitHash) {
    valid = false;
    errors.commitHash = 'This field should not be empty';
    return [valid, errors];
  }

  return [valid, errors];
};

export default validateCommitHash;
