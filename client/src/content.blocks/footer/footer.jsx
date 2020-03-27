import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { cn } from 'utils/bem';

import ContentBox from 'src/base.blocks/contentBox/contentBox';
import Link from 'src/base.blocks/link/link';

import './footer.css';

const Footer = props => {
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

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
