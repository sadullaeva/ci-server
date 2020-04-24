import { minsToMs } from 'utils/date';
import { SettingsForm, SettingsNorm } from 'typings/settings';

export const normalizeSettings = (settings: SettingsForm): SettingsNorm => {
  return {
    repoName: settings.repoName.trim(),
    buildCommand: settings.buildCommand.trim(),
    mainBranch: settings.mainBranch ? settings.mainBranch.trim() : 'master',
    period: settings.period ? minsToMs(parseFloat(settings.period.trim())) : 0,
  };
};

export default normalizeSettings;
