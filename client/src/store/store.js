import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import settings from 'store/settings/reducer';

const store = createStore(
  combineReducers({
    settings,
  }),
  applyMiddleware(thunk)
);

export default store;
