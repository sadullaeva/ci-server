import React from 'react';
import clsx from 'clsx';
import { cn } from 'utils/bem';

import './contentBox.css';

export interface ContentBoxProps {
  className?: string;
  children?: React.ReactNode;
}

const ContentBox: React.FC<ContentBoxProps> = props => {
  const { className = '', children } = props;
  const contentBox = cn('content-box');
  const classes = clsx(contentBox(), className);
  return <div className={classes}>{children}</div>;
};

export default ContentBox;
