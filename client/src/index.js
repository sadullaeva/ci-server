import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './store/store';

import PrivateRoute from './template.blocks/privateRoute/privateRoute';
import RouterWrapper from './template.blocks/routerWrapper/routerWrapper';

import SettingsPage from './pages/settingsPage/settingsPage';
import BuildPage from './pages/buildPage/buildPage';
import MainPage from './pages/mainPage/mainPage';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterWrapper>
        <Router>
          <Switch>
            <Route exact path={'/'}>
              <MainPage />
            </Route>
            <Route path={'/settings'}>
              <SettingsPage />
            </Route>
            <PrivateRoute path={'/build/:number'}>
              <BuildPage
                heading={'philip1967/my-awesome-repo'}
                build={{
                  status: 'success',
                  buildNumber: 1368,
                  message: 'add documentation for postgres scaler',
                  branch: 'master',
                  commit: '9c9f0b9',
                  author: 'Philip Kirkorov',
                  date: '21 янв, 03:06',
                  duration: '1 ч 20 мин',
                }}
              />
            </PrivateRoute>
            <Route>{'404'}</Route>
          </Switch>
        </Router>
      </RouterWrapper>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
