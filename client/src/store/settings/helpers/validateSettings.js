const validateSettings = settings => {
  let valid = true;
  let errors = {};

  if (!settings) {
    valid = false;
    errors.general = 'There are no settings provided';
    return [valid, errors];
  }

  const { repoName, buildCommand, period } = settings;

  if (!repoName) {
    valid = false;
    errors.repoName = 'Repository name should not be empty';
  }
  if (!buildCommand) {
    valid = false;
    errors.buildCommand = 'Build command should not be empty';
  }

  if (!/^[0-9]*$/.test(period)) {
    valid = false;
    errors.period = 'Period should be a number';
  }

  return [valid, errors];
};

export default validateSettings;
