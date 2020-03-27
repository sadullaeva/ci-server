import React from 'react';
import PropTypes, { object } from 'prop-types';
import clsx from 'clsx';
import { cn } from 'utils/bem';

import Header from 'content.blocks/header/header';
import ContentBox from 'base.blocks/contentBox/contentBox';
import Footer from 'content.blocks/footer/footer';

import './layout.css';

const Layout = props => {
  const { className = '', children, headerProps, contentProps, footerProps } = props;
  const layout = cn('layout');
  const classes = clsx(layout(), className);
  return (
    <div className={classes}>
      <Header {...headerProps} />
      <ContentBox {...contentProps}>{children}</ContentBox>
      <Footer {...footerProps} />
    </div>
  );
};

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  headerProps: PropTypes.object,
  contentProps: object,
  footerProps: PropTypes.object,
};

export default Layout;
