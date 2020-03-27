import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import StartPage from 'pages/startPage/startPage';
import SettingsPage from 'pages/settingsPage/settingsPage';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path={'/'} render={props => (props.settings ? 'build list' : <StartPage />)} />
        <Route path={'/settings'}>
          <SettingsPage />
        </Route>
        <Route path={'/build/:number'}>{'Build'}</Route>
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
