import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cn } from 'utils/bem';

import Button from 'base.blocks/button/button';
import Layout from 'template.blocks/layout/layout';
import Build from 'content.blocks/build/build';
import ContentBox from 'base.blocks/contentBox/contentBox';
import BuildLog from 'containers/buildLog/buildLog';

import { getBuild } from 'store/builds/getBuild';
import { cleanReducer } from 'store/builds/cleanReducer';

import { getBuildStatus } from 'utils/build';

import './buildPage.css';

const BuildPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const build = useSelector(state => state.builds.build);
  const repoName = useSelector(state => state.settings.settings?.repoName || 'Build details');

  useEffect(() => {
    dispatch(getBuild(id));

    return () => {
      dispatch(cleanReducer());
    };
  }, [id, dispatch]);

  const buildPage = cn('build-page');
  const layoutProps = {
    className: buildPage(),
    headerProps: {
      type: 'primary',
      heading: <Link to={'/'}>{repoName}</Link>,
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
          {build && (
            <Build
              size={'l'}
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
          )}
        </ContentBox>
        <ContentBox>
          <BuildLog buildId={id} />
        </ContentBox>
      </div>
    </Layout>
  );
};

export default BuildPage;
