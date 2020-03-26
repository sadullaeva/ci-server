import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { cn } from 'utils/bem';

import './button.css';

const Button = props => {
  const { className = '', type = 'button', kind, size, icon, ...other } = props;
  const button = cn('button');
  const classes = clsx(
    button(),
    className,
    kind && button({ kind }),
    size && button({ size }),
    icon && button({ icon: true }),
    icon && button({ icon })
  );
  return <button className={classes} type={type} {...other} />;
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  kind: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['s', 'xs']),
  icon: PropTypes.oneOf(['settings', 'play', 'repeat']),
};

export default Button;
