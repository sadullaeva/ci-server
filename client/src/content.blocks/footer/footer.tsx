import React from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const footer = cn('footer');
  const classes = clsx(footer(), className);
  return (
    <footer className={classes} {...other}>
      <ContentBox>
        <div className={footer('content')}>
          <Link href={'#'} type={'secondary'}>
            {t('Footer.support')}
          </Link>
          <Link href={'#'} type={'secondary'}>
            {t('Footer.learning')}
          </Link>
          <Link href={'#'} type={'secondary'}>
            {t('Footer.language')}
          </Link>
        </div>
        <div className={footer('content')}>
          <Link href={'#'} type={'secondary'}>
            {t('Footer.copyright')}
          </Link>
        </div>
      </ContentBox>
    </footer>
  );
};

export default Footer;
