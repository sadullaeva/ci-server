import Settings, { SettingsNorm } from 'typings/settings';

export type GetSettingsResponse = {
  data?: Settings;
};

export type PostSettingsRequest = SettingsNorm;
