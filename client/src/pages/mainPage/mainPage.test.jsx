import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import withTestEnv from 'utils/withTestEnv';

import MainPage from './mainPage';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  ReactDOM.unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('MainPage', () => {
  it('renders start page if there are no repository setting in store', () => {
    const initState = {
      settings: {
        settings: null,
      },
    };
    const store = mockStore(initState);
    const MainPageWithTestEnv = withTestEnv(MainPage, store);

    ReactDOM.render(<MainPageWithTestEnv />, container);

    expect(document.querySelector('.start-page')).toBeInTheDocument();
  });

  it('renders history page if there are repository setting in store', () => {
    // todo
  });
});
