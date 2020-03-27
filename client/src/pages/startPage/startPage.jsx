import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { cn } from 'utils/bem';

import Button from 'base.blocks/button/button';
import Layout from 'template.blocks/layout/layout';
import Placeholder from 'content.blocks/placeholder/placeholder';

import './startPage.css';

const StartPage = props => {
  const { history } = props;
  const startPage = cn('start-page');
  const layoutProps = {
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
  const placeholderProps = {
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

StartPage.propTypes = {
  history: PropTypes.object,
};

export default withRouter(StartPage);
