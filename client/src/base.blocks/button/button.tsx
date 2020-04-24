import React from 'react';
import clsx from 'clsx';
import { cn } from 'utils/bem';

import './button.css';

export type ButtonProps = Omit<React.HTMLProps<HTMLButtonElement>, 'size'> & {
  className?: string;
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  kind?: 'primary' | 'secondary';
  size?: 's' | 'xs';
  icon?: 'settings' | 'play' | 'repeat';
};

const Button: React.FC<ButtonProps> = props => {
  const {
    className = '',
    type = 'button',
    kind = 'primary',
    size,
    icon,
    children,
    ...other
  } = props;
  const button = cn('button');
  const classes = clsx(
    button(),
    className,
    kind && button({ kind }),
    size && button({ size }),
    icon && button({ icon: true }),
    icon && button({ icon })
  );
  return (
    <button className={classes} type={type} {...other}>
      <span className={button('content')}>{children}</span>
    </button>
  );
};

export default Button;
