import Settings from 'typings/settings';

export type GetSettingsResponse = {
  data?: Settings;
};

export type PostSettingsRequest = Omit<Settings, 'id'>;
