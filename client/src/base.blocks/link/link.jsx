import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { cn } from '@bem-react/classname';

import './link.css';

const Link = props => {
  const { className = '', children, href, type = 'primary', ...other } = props;
  const link = cn('link');
  const classes = clsx(link(), className, link({ type }));
  return (
    <a href={href} className={classes} {...other}>
      {children}
    </a>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  href: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary']),
};

export default Link;
