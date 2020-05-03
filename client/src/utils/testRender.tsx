import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { MemoryHistory, MemoryHistoryBuildOptions } from 'history/createMemoryHistory';
import thunk from 'redux-thunk';

import { State } from '../store/store';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

interface TestProviderProps {
  store: MockStoreEnhanced<unknown>;
  history: MemoryHistory;
  children: React.ReactNode;
}

const TestProvider: React.FC<TestProviderProps> = ({ store, history, children }) => (
  <Provider store={store}>
    <Router history={history}>{children}</Router>
  </Provider>
);

type TestRenderFn = (
  ui: React.ReactNode,
  storeInitialState?: Partial<State>,
  historyInitialState?: MemoryHistoryBuildOptions
) => RenderResult & {
  store: MockStoreEnhanced<unknown>;
  history: MemoryHistory;
};

const testRender: TestRenderFn = (ui, storeInitialState = {}, historyInitialState = {}) => {
  const store = mockStore(storeInitialState);
  const history = createMemoryHistory(historyInitialState);

  const renderResult = render(
    <TestProvider store={store} history={history}>
      {ui}
    </TestProvider>
  );

  return { store, history, ...renderResult };
};

export default testRender;
