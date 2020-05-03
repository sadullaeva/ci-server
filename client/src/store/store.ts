import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import builds from './builds/reducer';
import settings from './settings/reducer';

const rootReducer = combineReducers({
  builds,
  settings,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type State = ReturnType<typeof rootReducer>;
export type Store = typeof store;
