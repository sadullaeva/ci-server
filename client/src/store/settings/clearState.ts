import Action from 'typings/action';

export const CLEAR_VALIDATION = 'settings/clearValidation';

export type ClearValidationAction = Action & { type: typeof CLEAR_VALIDATION };

export const clearValidation = () => ({
  type: CLEAR_VALIDATION,
});
