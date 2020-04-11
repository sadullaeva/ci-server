import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

const withTestEnv = (Component, store) =>
  class extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <MemoryRouter>
            <Component {...this.props} />
          </MemoryRouter>
        </Provider>
      );
    }
  };

export default withTestEnv;
