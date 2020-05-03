type Settings = {
  id: string;
  repoName: string;
  buildCommand: string;
  mainBranch: string;
  period: number;
};

export type SettingsForm = {
  repoName: string;
  buildCommand: string;
  mainBranch: string;
  period: string;
};

export type SettingsNorm = Omit<Settings, 'id'>;

export default Settings;
