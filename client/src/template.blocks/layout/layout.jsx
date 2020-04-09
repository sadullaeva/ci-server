import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { cn } from 'utils/bem';

import Header from 'content.blocks/header/header';
import Footer from 'content.blocks/footer/footer';

import './layout.css';

const Layout = props => {
  const { className = '', children, headerProps, footerProps } = props;
  const layout = cn('layout');
  const classes = clsx(layout(), className);
  return (
    <div className={classes}>
      <Header {...headerProps} />
      <main className={layout('content')}>{children}</main>
      <Footer {...footerProps} />
    </div>
  );
};

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  headerProps: PropTypes.object,
  footerProps: PropTypes.object,
};

export default Layout;
