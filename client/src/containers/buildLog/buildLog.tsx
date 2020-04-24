import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { cn } from 'utils/bem';

import { getBuildLog } from 'store/builds/getBuildLog';
import { State } from 'store/store';
import BuildLog from 'typings/buildLog';

import './buildLog.css';

export interface BuildLogProps {
  className?: string;
  buildId: string;
}

const BuildLog: React.FC<BuildLogProps> = props => {
  const { buildId, className = '' } = props;
  const dispatch = useDispatch();
  const log = useSelector((state: State): BuildLog => state.builds.log);

  useEffect(() => {
    dispatch(getBuildLog(buildId));
  }, [dispatch, buildId]);

  const buildLog = cn('build-log');

  return log ? <pre className={clsx(buildLog(), className)}>{log}</pre> : null;
};

export default BuildLog;
