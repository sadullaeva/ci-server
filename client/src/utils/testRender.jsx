import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const TestProvider = ({ store, children }) => (
  <Provider store={store}>
    <MemoryRouter>{children}</MemoryRouter>
  </Provider>
);

const testRender = (ui, storeInitialState = {}, ...otherOptions) => {
  const store = mockStore(storeInitialState);

  render(<TestProvider store={store}>{ui}</TestProvider>, otherOptions);
};

export default testRender;
