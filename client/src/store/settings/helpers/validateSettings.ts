import { SettingsForm } from 'typings/settings';

export type SettingsValid = boolean;

export type SettingsErrors = {
  general?: string;
  repoName?: string;
  buildCommand?: string;
  mainBranch?: string;
  period?: string;
};

const validateSettings = (settings: SettingsForm): [SettingsValid, SettingsErrors] => {
  let valid: SettingsValid = true;
  let errors: SettingsErrors = {};

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
