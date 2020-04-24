import React from 'react';
import clsx from 'clsx';
import { cn } from 'utils/bem';

import Header, { HeaderProps } from 'content.blocks/header/header';
import Footer, { FooterProps } from 'content.blocks/footer/footer';

import './layout.css';

export interface LayoutProps {
  className?: string;
  children?: React.ReactNode;
  headerProps: HeaderProps;
  footerProps: FooterProps;
}

const Layout: React.FC<LayoutProps> = props => {
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

export default Layout;
