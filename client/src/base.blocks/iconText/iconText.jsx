import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { cn } from '@bem-react/classname';

import './iconText.css';

const IconText = props => {
  const { className = '', children, icon, type = 'primary', ...other } = props;
  const iconText = cn('icon-text');
  const classes = clsx(iconText(), className, icon && iconText({ icon }), iconText({ type }));
  return (
    <div className={classes} {...other}>
      {children}
    </div>
  );
};

IconText.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.oneOf(['primary', 'secondary']),
  icon: PropTypes.oneOf(['calendar', 'stopwatch', 'commit', 'user']),
};

export default IconText;
