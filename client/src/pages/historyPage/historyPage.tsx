import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { cn } from 'utils/bem';

import Button from 'base.blocks/button/button';
import Layout, { LayoutProps } from 'template.blocks/layout/layout';
import Build from 'content.blocks/build/build';
import Placeholder from 'content.blocks/placeholder/placeholder';
import ContentBox from 'base.blocks/contentBox/contentBox';
import RunBuildDialog from 'containers/runBuildDialog/runBuildDialog';
import Loader from 'base.blocks/loader/loader';

import { getBuilds } from 'store/builds/getBuilds';
import { clearState } from 'store/builds/clearState';

import { getBuildStatus } from 'utils/build';

import { State } from 'store/store';

import './historyPage.css';

const HistoryPage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const repoName = useSelector(
    (state: State) => state.settings.settings?.repoName || t('HistoryPage.title')
  );
  const { builds, loading, hasMore } = useSelector((state: State) => state.builds);
  const isEmpty = useMemo(() => !builds || !builds.length, [builds]);

  const loadBuilds = useCallback(() => {
    dispatch(getBuilds());
  }, [dispatch]);

  useEffect(() => {
    loadBuilds();

    return () => {
      dispatch(clearState());
    };
  }, [dispatch, loadBuilds]);

  const onClickRunBuild = () => setDialogOpen(true);
  const onCancelRunBuild = () => setDialogOpen(false);

  const historyPage = cn('history-page');
  const layoutProps: LayoutProps = {
    className: clsx(historyPage(), historyPage({ empty: isEmpty })),
    headerProps: {
      type: 'primary',
      heading: repoName,
      extra: (
        <>
          <Button
            kind={'secondary'}
            size={'s'}
            icon={'play'}
            onClick={onClickRunBuild}
            data-testid={'run-build'}
          >
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
              {t('HistoryPage.showMore')}
            </Button>
          )}
        </ContentBox>
      ) : (
        <Placeholder
          action={{
            content: t('HistoryPage.runBuild'),
            onClick: onClickRunBuild,
          }}
        >
          {t('HistoryPage.noBuilds')}
        </Placeholder>
      )}
      <RunBuildDialog open={dialogOpen} onClose={onCancelRunBuild} />
      <Loader show={loading} />
    </Layout>
  );
};

export default HistoryPage;
