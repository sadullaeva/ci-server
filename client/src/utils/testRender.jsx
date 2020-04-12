import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const TestProvider = ({ store, history, children }) => (
  <Provider store={store}>
    <Router history={history}>{children}</Router>
  </Provider>
);

const testRender = (ui, storeInitialState = {}, historyInitialState = {}, ...otherOptions) => {
  const store = mockStore(storeInitialState);
  const history = createMemoryHistory(historyInitialState);

  const renderResult = render(
    <TestProvider store={store} history={history}>
      {ui}
    </TestProvider>,
    otherOptions
  );

  return { store, history, ...renderResult };
};

export default testRender;
