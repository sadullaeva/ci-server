import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = props => {
  const { children, ...other } = props;
  const settings = useSelector(state => state.settings.settings);

  return (
    <Route
      {...other}
      render={({ location }) =>
        !!settings ? children : <Redirect to={{ pathname: '/', state: { from: location } }} />
      }
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
