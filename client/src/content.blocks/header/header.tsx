import React from 'react';
import clsx from 'clsx';
import { cn } from 'utils/bem';

import ContentBox from 'base.blocks/contentBox/contentBox';

import './header.css';

export interface HeaderProps {
  className?: string;
  type?: 'primary' | 'secondary';
  heading?: React.ReactNode;
  extra?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = props => {
  const { className = '', type = 'primary', heading, extra } = props;
  const header = cn('header');
  const classes = clsx(header(), className, header({ type }));
  return (
    <header className={classes}>
      <ContentBox>
        {heading}
        <div className={header('extra')}>{extra}</div>
      </ContentBox>
    </header>
  );
};

export default Header;
