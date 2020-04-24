import { minsToMs } from 'utils/date';
import Settings from '../../../typings/settings';

type NormalizeSettingsFn = ({
  repoName,
  buildCommand,
  mainBranch,
  period,
}: {
  repoName: string;
  buildCommand: string;
  mainBranch: string;
  period: string;
}) => Omit<Settings, 'id'>;

export const normalizeSettings: NormalizeSettingsFn = settings => {
  return {
    repoName: settings.repoName.trim(),
    buildCommand: settings.buildCommand.trim(),
    mainBranch: settings.mainBranch ? settings.mainBranch.trim() : 'master',
    period: settings.period ? minsToMs(parseFloat(settings.period.trim())) : 0,
  };
};

export default normalizeSettings;
