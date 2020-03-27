import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import StartPage from 'pages/startPage/startPage';
import SettingsPage from 'pages/settingsPage/settingsPage';
import HistoryPage from './pages/historyPage/historyPage';
import BuildPage from './pages/buildPage/buildPage';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route
          exact
          path={'/'}
          render={props =>
            !props.settings ? <HistoryPage heading={'philip1967/my-awesome-repo'} /> : <StartPage />
          }
        />
        <Route path={'/settings'}>
          <SettingsPage />
        </Route>
        <Route path={'/build/:number'}>
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
        </Route>
        <Route>{'404'}</Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
