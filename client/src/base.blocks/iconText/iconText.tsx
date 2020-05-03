import React from 'react';
import clsx from 'clsx';
import { cn } from 'utils/bem';

import './iconText.css';

export interface IconTextProps {
  className?: string;
  children?: React.ReactNode;
  type?: 'primary' | 'secondary';
  icon: 'calendar' | 'stopwatch' | 'commit' | 'user';
}

const IconText: React.FC<IconTextProps> = props => {
  const { className = '', children, icon, type = 'primary', ...other } = props;
  const iconText = cn('icon-text');
  const classes = clsx(iconText(), className, icon && iconText({ icon }), iconText({ type }));
  return (
    <div className={classes} {...other}>
      {children}
    </div>
  );
};

export default IconText;
