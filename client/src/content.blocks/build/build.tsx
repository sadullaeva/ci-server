import React from 'react';
import prettyMilliseconds from 'pretty-ms';
import dayjs from 'dayjs';
import clsx from 'clsx';
import { cn } from 'utils/bem';

import IconText from 'base.blocks/iconText/iconText';

import './build.css';

export interface BuildProps {
  className?: string;
  status?: 'waiting' | 'running' | 'success' | 'failed' | 'cancelled';
  size?: 'l';
  meta: {
    buildNumber: number;
    message: string;
    branch: string;
    commit: string;
    author: string;
    date: string;
    duration: number;
  };
}

const Build: React.FC<BuildProps> = props => {
  const { className = '', size, status, meta } = props;
  const duration = meta.duration ? prettyMilliseconds(meta.duration) : '';
  const date = meta.date ? dayjs(meta.date).format('D MMM, HH:mm') : '';

  const build = cn('build');
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
        {date && (
          <IconText type={size ? 'primary' : 'secondary'} icon={'calendar'}>
            {date}
          </IconText>
        )}
        {duration && (
          <IconText type={size ? 'primary' : 'secondary'} icon={'stopwatch'}>
            {duration}
          </IconText>
        )}
      </div>
    </div>
  );
};

export default Build;
