import validateCommitHash from './validateCommitHash';

describe('validateCommitHash', () => {
  it('returns object without errors when commit hash is valid', () => {
    const commitHash = '1q2w3e4';

    const result = validateCommitHash(commitHash);

    expect(result).toEqual([true, {}]);
  });

  it('returns object with errors when commit hash is invalid', () => {
    const commitHash = '';

    const result = validateCommitHash(commitHash);

    expect(result).toEqual([false, { commitHash: 'This field should not be empty' }]);
  });
});
