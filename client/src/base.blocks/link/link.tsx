import React from 'react';
import clsx from 'clsx';
import { cn } from 'utils/bem';

import './link.css';

export type LinkProps = React.HTMLProps<HTMLAnchorElement> & {
  className?: string;
  children?: React.ReactNode;
  href: string;
  type?: 'primary' | 'secondary';
};

const Link: React.FC<LinkProps> = props => {
  const { className = '', children, href, type = 'primary', ...other } = props;
  const link = cn('link');
  const classes = clsx(link(), className, link({ type }));
  return (
    <a href={href} className={classes} {...other}>
      {children}
    </a>
  );
};

export default Link;
