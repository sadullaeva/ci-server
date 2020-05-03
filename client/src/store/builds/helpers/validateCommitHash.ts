export type CommitHashErrors = {
  commitHash?: string;
};

export type CommitHashValid = boolean;

const validateCommitHash = (commitHash: string): [CommitHashValid, CommitHashErrors] => {
  let valid: CommitHashValid = true;
  let errors: CommitHashErrors = {};

  if (!commitHash) {
    valid = false;
    errors.commitHash = 'This field should not be empty';
    return [valid, errors];
  }

  return [valid, errors];
};

export default validateCommitHash;
