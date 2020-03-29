import React, { useCallback, useEffect, useMemo, useState } from 'react';
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
import Loader from 'base.blocks/loader/loader';

import { getBuilds } from 'store/builds/getBuilds';
import { clearState } from 'store/builds/clearState';

import { getBuildStatus } from 'utils/build';

import './historyPage.css';

const HistoryPage = () => {
  const dispatch = useDispatch();
  const [dialogOpen, setDialogOpen] = useState(false);

  const repoName = useSelector(state => state.settings.settings?.repoName || 'Builds history');
  const { builds, loading, hasMore } = useSelector(state => state.builds);
  const isEmpty = useMemo(() => !builds || !builds.length, [builds]);

  useEffect(() => {
    loadBuilds();

    return () => {
      dispatch(clearState());
    };
  }, [dispatch, getBuilds]);

  const loadBuilds = useCallback(() => {
    dispatch(getBuilds());
  }, [dispatch]);

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
                  status={getBuildStatus(build.status)}
                  meta={{
                    buildNumber: build.buildNumber,
                    message: build.commitMessage,
                    branch: build.branchName,
                    commit: build.commitHash,
                    author: build.authorName,
                    date: build.start,
                    duration: build.duration,
                  }}
                />
              </Link>
            );
          })}
          {hasMore && (
            <Button
              kind={'secondary'}
              size={'s'}
              className={historyPage('show-more')}
              onClick={loadBuilds}
            >
              Show more
            </Button>
          )}
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
      <Loader show={loading} />
    </Layout>
  );
};

export default HistoryPage;
