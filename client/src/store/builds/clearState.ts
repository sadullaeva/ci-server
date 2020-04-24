import Action from 'typings/action';

export const CLEAR_STATE = 'builds/clearState';

export type ClearStateAction = Action & { type: typeof CLEAR_STATE };

export const clearState = (): ClearStateAction => ({
  type: CLEAR_STATE,
});
