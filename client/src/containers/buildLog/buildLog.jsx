import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { cn } from 'utils/bem';

import { getBuildLog } from 'store/builds/getBuildLog';

import './buildLog.css';

const BuildLog = props => {
  const { buildId, className = '' } = props;
  const dispatch = useDispatch();
  const log = useSelector(state => state.builds.log);

  useEffect(() => {
    dispatch(getBuildLog(buildId));
  }, [dispatch, buildId]);

  const buildLog = cn('build-log');

  return log ? <pre className={clsx(buildLog(), className)}>{log}</pre> : null;
};

BuildLog.propTypes = {
  buildId: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default BuildLog;
