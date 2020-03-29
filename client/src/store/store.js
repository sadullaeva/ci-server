import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import builds from './builds/reducer';
import settings from './settings/reducer';

const store = createStore(
  combineReducers({
    builds,
    settings,
  }),
  applyMiddleware(thunk)
);

export default store;
