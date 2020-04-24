import React from 'react';
import clsx from 'clsx';
import { cn } from 'utils/bem';

import ContentBox from 'base.blocks/contentBox/contentBox';
import Link from 'base.blocks/link/link';

import './footer.css';

export interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = props => {
  const { className = '', ...other } = props;
  const footer = cn('footer');
  const classes = clsx(footer(), className);
  return (
    <footer className={classes} {...other}>
      <ContentBox>
        <div className={footer('content')}>
          <Link href={'#'} type={'secondary'}>
            Support
          </Link>
          <Link href={'#'} type={'secondary'}>
            Learning
          </Link>
        </div>
        <div className={footer('content')}>
          <Link href={'#'} type={'secondary'}>
            © 2020 Marina Lazarenko
          </Link>
        </div>
      </ContentBox>
    </footer>
  );
};

export default Footer;
