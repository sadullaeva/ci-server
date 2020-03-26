import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { cn } from 'utils/bem';

import './contentBox.css';

const ContentBox = props => {
  const { className = '', children } = props;
  const contentBox = cn('content-box');
  const classes = clsx(contentBox(), className);
  return <div className={classes}>{children}</div>;
};

ContentBox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default ContentBox;
