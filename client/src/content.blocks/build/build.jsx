import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { cn } from 'utils/bem';

import IconText from 'base.blocks/iconText/iconText';

import './build.css';

const Build = props => {
  const { className = '', type, size, meta } = props;
  const build = cn('build');
  const classes = clsx(build(), className, type && build({ type }), size && build({ size }));
  return (
    <div className={classes}>
      <div className={build('content')}>
        <div className={build('number')}>{`#${meta.buildNumber}`}</div>
        <div className={build('message')}>{meta.message}</div>
      </div>
      <div className={build('meta', { horizontal: true })}>
        <IconText type={'primary'} icon={'commit'}>
          {meta.branch}
          <span className={build('commit')}>{meta.commit}</span>
        </IconText>
        <IconText type={'primary'} icon={'user'}>
          {meta.author}
        </IconText>
      </div>
      <div className={build('meta', size ? { horizontal: true } : { vertical: true })}>
        <IconText type={size ? 'primary' : 'secondary'} icon={'calendar'}>
          {meta.date}
        </IconText>
        <IconText type={size ? 'primary' : 'secondary'} icon={'stopwatch'}>
          {meta.duration}
        </IconText>
      </div>
    </div>
  );
};

Build.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['success', 'running', 'failed']),
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
