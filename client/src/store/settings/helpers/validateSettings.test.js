import validateSettings from './validateSettings';

describe('validateSettings', () => {
  it('returns object without errors if settings are valid', () => {
    const settings = {
      repoName: 'sadullaeva/shri-2020-task-2',
      buildCommand: 'npm i && npm run build',
      mainBranch: 'master',
      period: '10',
    };

    const [valid, errors] = validateSettings(settings);

    expect(valid).toBe(true);
    expect(errors).toEqual({});
  });

  it('returns object with errors if settings are not provided', () => {
    const settings = null;

    const [valid, errors] = validateSettings(settings);

    expect(valid).toBe(false);
    expect(errors).toHaveProperty('general');
  });

  it('returns object with errors if repoName is not specified', () => {
    const settings = {
      repoName: '',
      buildCommand: 'npm i && npm run build',
      mainBranch: 'master',
      period: '10',
    };

    const [valid, errors] = validateSettings(settings);

    expect(valid).toBe(false);
    expect(errors).toHaveProperty('repoName');
  });

  it('returns object with errors if buildCommand is not specified', () => {
    const settings = {
      repoName: 'sadullaeva/shri-2020-task-2',
      buildCommand: '',
      mainBranch: 'master',
      period: '10',
    };

    const [valid, errors] = validateSettings(settings);

    expect(valid).toBe(false);
    expect(errors).toHaveProperty('buildCommand');
  });

  it('returns object with errors if period is not a number', () => {
    const settings = {
      repoName: 'sadullaeva/shri-2020-task-2',
      buildCommand: 'npm i && npm run build',
      mainBranch: 'master',
      period: '10 mins',
    };

    const [valid, errors] = validateSettings(settings);

    expect(valid).toBe(false);
    expect(errors).toHaveProperty('period');
  });
});
