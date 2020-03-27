import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { cn } from 'utils/bem';

import ContentBox from 'base.blocks/contentBox/contentBox';

import './header.css';

const Header = props => {
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

Header.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'secondary']),
  heading: PropTypes.node,
  extra: PropTypes.node,
};

export default Header;
