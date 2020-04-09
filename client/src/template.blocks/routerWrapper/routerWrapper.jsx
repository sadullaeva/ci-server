import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { getSettings } from 'store/settings/getSettings';

const RouterWrapper = props => {
  const dispatch = useDispatch();
  const settings = useSelector(state => state.settings.settings);

  useEffect(() => {
    if (!settings) {
      dispatch(getSettings());
    }
  }, [settings, dispatch]);

  return <>{props.children}</>;
};

RouterWrapper.propTypes = {
  children: PropTypes.node,
};

export default RouterWrapper;
