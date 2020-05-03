import React from 'react';
import clsx from 'clsx';
import { cn } from 'utils/bem';

import Button from 'base.blocks/button/button';

import './placeholder.css';

export interface PlaceholderProps {
  className?: string;
  children?: React.ReactNode;
  action?: {
    content: React.ReactNode;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  };
}

const Placeholder: React.FC<PlaceholderProps> = props => {
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

export default Placeholder;
