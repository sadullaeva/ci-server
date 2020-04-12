import { minsToMs } from 'utils/date';

export const normalizeSettings = settings => {
  return {
    repoName: settings.repoName.trim(),
    buildCommand: settings.buildCommand.trim(),
    mainBranch: settings.mainBranch ? settings.mainBranch.trim() : 'master',
    period: settings.period ? minsToMs(parseFloat(settings.period.trim())) : 0,
  };
};

export default normalizeSettings;
