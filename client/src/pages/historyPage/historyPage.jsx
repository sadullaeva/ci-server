import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { cn } from 'utils/bem';

import Button from 'base.blocks/button/button';
import Layout from 'template.blocks/layout/layout';
import Build from 'content.blocks/build/build';
import Placeholder from 'content.blocks/placeholder/placeholder';
import ContentBox from 'base.blocks/contentBox/contentBox';
import RunBuildDialog from 'containers/runBuildDialog/runBuildDialog';

import { getBuilds } from 'store/builds/getBuilds';

import './historyPage.css';

const HistoryPage = () => {
  const dispatch = useDispatch();
  const [dialogOpen, setDialogOpen] = useState(false);

  const repoName = useSelector(state => state.settings.settings?.repoName || 'Builds history');
  const builds = useSelector(state => state.builds.builds);
  const isEmpty = useMemo(() => !builds || !builds.length, [builds]);

  useEffect(() => {
    if (isEmpty) {
      dispatch(getBuilds());
    }
  }, [isEmpty]);

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
            return (
              <Link to={`/build/${build.id}`} key={build.id}>
                <Build
                  status={build.status}
                  meta={{
                    buildNumber: build.buildNumber,
                    message: build.commitMessage,
                    branch: build.branchName,
                    commit: build.commitHash,
                    author: build.authorName,
                    date: build.date,
                    duration: build.duration,
                  }}
                />
              </Link>
            );
          })}
          <Button kind={'secondary'} size={'s'} className={historyPage('show-more')}>
            Show more
          </Button>
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

export default HistoryPage;
