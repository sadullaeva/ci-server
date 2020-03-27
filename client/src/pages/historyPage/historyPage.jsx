import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { cn } from 'utils/bem';

import Button from 'base.blocks/button/button';
import Layout from 'template.blocks/layout/layout';
import Build from 'content.blocks/build/build';
import Placeholder from 'content.blocks/placeholder/placeholder';

import './historyPage.css';
import clsx from 'clsx';

const HistoryPage = props => {
  const { heading, builds = [] } = props;
  const isEmpty = !builds || !builds.length;
  const historyPage = cn('history-page');
  const layoutProps = {
    className: clsx(historyPage(), historyPage({ empty: isEmpty })),
    headerProps: {
      type: 'primary',
      heading,
      extra: (
        <>
          <Button kind={'secondary'} size={'s'} icon={'play'}>
            Run build
          </Button>
          <Link to={'/settings'}>
            <Button kind={'secondary'} size={'xs'} icon={'settings'} />
          </Link>
        </>
      ),
    },
    contentProps: {
      className: historyPage('content'),
    },
  };
  return (
    <Layout {...layoutProps}>
      {!isEmpty ? (
        builds.map(build => {
          const { type, buildNumber, message, branch, commit, author, date, duration } = build;
          return (
            <Build
              meta={{
                buildNumber,
                message,
                branch,
                commit,
                author,
                date,
                duration,
              }}
              type={type}
            />
          );
        })
      ) : (
        <Placeholder
          action={{
            content: 'Run build',
            onClick: () => {
              /* todo: open popup */
            },
          }}
        >
          Here are no builds yet. Run the first one
        </Placeholder>
      )}
    </Layout>
  );
};

HistoryPage.propTypes = {
  heading: PropTypes.string.isRequired,
  builds: PropTypes.arrayOf(PropTypes.object),
};

export default HistoryPage;
