import React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { MemoryHistory } from 'history';
import { useTranslation } from 'react-i18next';
import { cn } from 'utils/bem';

import Button from 'base.blocks/button/button';
import Layout, { LayoutProps } from 'template.blocks/layout/layout';
import Placeholder, { PlaceholderProps } from 'content.blocks/placeholder/placeholder';

import './startPage.css';

export interface StartPageProps {
  history: MemoryHistory;
}

const StartPage: React.FC<StartPageProps & RouteComponentProps> = props => {
  const { history } = props;
  const { t } = useTranslation();
  const startPage = cn('start-page');
  const layoutProps: LayoutProps = {
    className: startPage(),
    headerProps: {
      type: 'secondary',
      heading: t('StartPage.title'),
      extra: (
        <Link to={'/settings'}>
          <Button kind={'secondary'} size={'s'} icon={'settings'}>
            {t('StartPage.settings')}
          </Button>
        </Link>
      ),
    },
  };
  const placeholderProps: PlaceholderProps = {
    children: t('StartPage.text'),
    action: {
      content: t('StartPage.action'),
      onClick: () => {
        history.push('/settings');
      },
    },
  };
  return (
    <Layout {...layoutProps}>
      <Placeholder {...placeholderProps} />
    </Layout>
  );
};

export default withRouter(StartPage);
