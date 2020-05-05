import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';

import { store } from './store/store';

import RouterWrapper from './template.blocks/routerWrapper/routerWrapper';

import SettingsPage from './pages/settingsPage/settingsPage';
import BuildPage from './pages/buildPage/buildPage';
import MainPage from './pages/mainPage/mainPage';
import ErrorBoundary from './template.blocks/errorBoundary/errorBoundary';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterWrapper>
        <Router>
          <ErrorBoundary>
            <Switch>
              <Route exact path={'/'}>
                <MainPage />
              </Route>
              <Route path={'/settings'}>
                <SettingsPage />
              </Route>
              <Route path={'/build/:id'}>
                <BuildPage />
              </Route>
              <Route>{'404'}</Route>
            </Switch>
          </ErrorBoundary>
        </Router>
      </RouterWrapper>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/serviceWorker.js`).then(
      function(registration) {
        console.log('Service worker successfully registered');
      },
      function(err) {
        console.log('Service worker registration failed:', err);
      }
    );
  });
}
