import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { cn } from 'utils/bem';

import IconText from 'base.blocks/iconText/iconText';

import './build.css';

const Build = props => {
  const { className = '', size, meta } = props;
  const build = cn('build');
  const status = {
    Waiting: 'waiting',
    InProgress: 'running',
    Success: 'success',
    Fail: 'failed',
    Canceled: 'cancelled',
  }[props.status];
  const classes = clsx(build(), className, status && build({ status }), size && build({ size }));
  return (
    <div className={classes}>
      <div className={build('content')}>
        <div className={build('number')}>{`#${meta.buildNumber}`}</div>
        <div className={build('message')}>{meta.message}</div>
      </div>
      <div className={build('meta', { horizontal: true })}>
        <IconText type={'primary'} icon={'commit'}>
          {meta.branch}
          <span className={build('commit')}>{meta.commit.slice(0, 7)}</span>
        </IconText>
        <IconText type={'primary'} icon={'user'}>
          {meta.author}
        </IconText>
      </div>
      <div className={build('meta', size ? { horizontal: true } : { vertical: true })}>
        {meta.date && (
          <IconText type={size ? 'primary' : 'secondary'} icon={'calendar'}>
            {meta.date}
          </IconText>
        )}
        {meta.duration && (
          <IconText type={size ? 'primary' : 'secondary'} icon={'stopwatch'}>
            {meta.duration}
          </IconText>
        )}
      </div>
    </div>
  );
};

Build.propTypes = {
  className: PropTypes.string,
  status: PropTypes.oneOf(['waiting', 'running', 'success', 'failed', 'cancelled']),
  size: PropTypes.oneOf(['l']),
  meta: PropTypes.exact({
    buildNumber: PropTypes.number,
    message: PropTypes.string,
    branch: PropTypes.string,
    commit: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    duration: PropTypes.string,
  }).isRequired,
};

export default Build;
