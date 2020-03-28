import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { cn } from 'utils/bem';

import Button from 'base.blocks/button/button';
import Layout from 'template.blocks/layout/layout';
import Build from 'content.blocks/build/build';
import ContentBox from 'base.blocks/contentBox/contentBox';

import './buildPage.css';

const BuildPage = props => {
  const { heading, build, log } = props;
  const { status, ...meta } = build;
  const buildPage = cn('build-page');
  const layoutProps = {
    className: buildPage(),
    headerProps: {
      type: 'primary',
      heading: <Link to={'/'}>{heading}</Link>,
      extra: (
        <>
          <Button kind={'secondary'} size={'s'} icon={'repeat'}>
            Rebuild
          </Button>
          <Link to={'/settings'}>
            <Button kind={'secondary'} size={'xs'} icon={'settings'} />
          </Link>
        </>
      ),
    },
  };
  return (
    <Layout {...layoutProps}>
      <div className={buildPage('content')}>
        <ContentBox>
          <Build meta={meta} status={status} size={'l'} />
        </ContentBox>
        {log && (
          <ContentBox className={buildPage('log')}>
            <pre>{log}</pre>
          </ContentBox>
        )}
      </div>
    </Layout>
  );
};

BuildPage.propTypes = {
  heading: PropTypes.string,
  build: PropTypes.exact({
    status: PropTypes.oneOf(['success', 'running', 'failed']),
    buildNumber: PropTypes.number,
    message: PropTypes.string,
    branch: PropTypes.string,
    commit: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    duration: PropTypes.string,
  }).isRequired,
  log: PropTypes.string,
};

export default BuildPage;
