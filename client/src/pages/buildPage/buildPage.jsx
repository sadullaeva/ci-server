import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cn } from 'utils/bem';

import Button from 'base.blocks/button/button';
import Layout from 'template.blocks/layout/layout';
import Build from 'content.blocks/build/build';
import ContentBox from 'base.blocks/contentBox/contentBox';

import { getBuild } from 'store/builds/getBuild';
import { getBuildStatus } from 'utils/build';

import './buildPage.css';

const BuildPage = props => {
  const { log } = props;
  const { id } = useParams();
  const dispatch = useDispatch();
  const build = useSelector(state => state.builds.build);
  const repoName = useSelector(state => state.settings.settings?.repoName || 'Build details');

  useEffect(() => {
    if (!build || build.id !== id) {
      dispatch(getBuild(id));
    }
  }, [build, id, dispatch]);

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
                date: build.date,
                duration: build.duration,
              }}
            />
          )}
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
  log: PropTypes.string,
};

export default BuildPage;
