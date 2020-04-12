import React from 'react';
import ReactDOM from 'react-dom';

import testRender from 'utils/testRender';

import MainPage from './mainPage';

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

    testRender(<MainPage />, initState);

    expect(document.querySelector('.start-page')).toBeInTheDocument();
  });

  it('renders history page if there are repository setting in store', () => {
    // todo
  });
});
