import normalizeSettings from './normalizeSettings';

describe('normalizeSettings', () => {
  it('normalizes settings correctly if all fields are filled', () => {
    const settings = {
      repoName: 'sadullaeva/shri-2020-task-2',
      buildCommand: 'npm i && npm run build',
      mainBranch: 'master',
      period: '10',
    };
    const expectedResult = {
      repoName: 'sadullaeva/shri-2020-task-2',
      buildCommand: 'npm i && npm run build',
      mainBranch: 'master',
      period: 600000,
    };

    const result = normalizeSettings(settings);

    expect(result).toEqual(expectedResult);
  });

  it('normalizes settings correctly if mainBranch is not specified', () => {
    const settings = {
      repoName: 'sadullaeva/shri-2020-task-2',
      buildCommand: 'npm i && npm run build',
      mainBranch: '',
      period: '10',
    };
    const expectedResult = {
      repoName: 'sadullaeva/shri-2020-task-2',
      buildCommand: 'npm i && npm run build',
      mainBranch: 'master',
      period: 600000,
    };

    const result = normalizeSettings(settings);

    expect(result).toEqual(expectedResult);
  });

  it('normalizes settings correctly if period is not specified', () => {
    const settings = {
      repoName: 'sadullaeva/shri-2020-task-2',
      buildCommand: 'npm i && npm run build',
      mainBranch: 'master',
      period: '',
    };
    const expectedResult = {
      repoName: 'sadullaeva/shri-2020-task-2',
      buildCommand: 'npm i && npm run build',
      mainBranch: 'master',
      period: 0,
    };

    const result = normalizeSettings(settings);

    expect(result).toEqual(expectedResult);
  });
});
