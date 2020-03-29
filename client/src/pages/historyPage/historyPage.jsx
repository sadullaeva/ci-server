import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { cn } from 'utils/bem';

import Button from 'base.blocks/button/button';
import Layout from 'template.blocks/layout/layout';
import Build from 'content.blocks/build/build';
import Placeholder from 'content.blocks/placeholder/placeholder';
import ContentBox from 'base.blocks/contentBox/contentBox';
import RunBuildDialog from 'containers/runBuildDialog/runBuildDialog';

import './historyPage.css';

const HistoryPage = props => {
  const { builds = [] } = props;
  const [dialogOpen, setDialogOpen] = useState(false);

  const isEmpty = !builds || !builds.length;
  const repoName = useSelector(state => state.settings.settings?.repoName || 'Builds history');

  const onClickRunBuild = () => setDialogOpen(true);
  const onCancelRunBuild = () => setDialogOpen(false);

  const historyPage = cn('history-page');
  const layoutProps = {
    className: clsx(historyPage(), historyPage({ empty: isEmpty })),
    headerProps: {
      type: 'primary',
      heading: repoName,
      extra: (
        <>
          <Button kind={'secondary'} size={'s'} icon={'play'} onClick={onClickRunBuild}>
            Run build
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
      {!isEmpty ? (
        <ContentBox className={historyPage('content')}>
          {builds.map(build => {
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
          })}
          <Button kind={'secondary'} size={'s'} className={historyPage('show-more')} />
        </ContentBox>
      ) : (
        <Placeholder
          action={{
            content: 'Run build',
            onClick: onClickRunBuild,
          }}
        >
          Here are no builds yet. Run the first one
        </Placeholder>
      )}
      <RunBuildDialog open={dialogOpen} onClose={onCancelRunBuild} />
    </Layout>
  );
};

HistoryPage.propTypes = {
  builds: PropTypes.arrayOf(PropTypes.object),
};

export default HistoryPage;
