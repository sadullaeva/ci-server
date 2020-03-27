import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { cn } from 'utils/bem';

import Button from 'src/base.blocks/button/button';

import './placeholder.css';

const Placeholder = props => {
  const { className = '', children, action } = props;
  const placeholder = cn('placeholder');
  const classes = clsx(placeholder(), className);
  return (
    <div className={classes}>
      <div className={placeholder('content')}>{children}</div>
      {action && (
        <Button kind={'primary'} onClick={action.onClick}>
          {action.content}
        </Button>
      )}
    </div>
  );
};

Placeholder.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  action: PropTypes.shape({
    content: PropTypes.node,
    onClick: PropTypes.func,
  }),
};

export default Placeholder;
