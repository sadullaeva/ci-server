import React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { MemoryHistory } from 'history';
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
  const startPage = cn('start-page');
  const layoutProps: LayoutProps = {
    className: startPage(),
    headerProps: {
      type: 'secondary',
      heading: 'School CI server',
      extra: (
        <Link to={'/settings'}>
          <Button kind={'secondary'} size={'s'} icon={'settings'}>
            Settings
          </Button>
        </Link>
      ),
    },
  };
  const placeholderProps: PlaceholderProps = {
    children: 'Configure repository connection and synchronization settings',
    action: {
      content: 'Open settings',
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
