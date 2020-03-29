import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cn } from 'utils/bem';

import Button from 'base.blocks/button/button';
import Layout from 'template.blocks/layout/layout';
import Build from 'content.blocks/build/build';
import ContentBox from 'base.blocks/contentBox/contentBox';
import BuildLog from 'containers/buildLog/buildLog';
import Loader from 'base.blocks/loader/loader';

import { getBuild } from 'store/builds/getBuild';
import { clearState } from 'store/builds/clearState';
import { runBuild } from 'store/builds/runBuild';

import { getBuildStatus } from 'utils/build';

import './buildPage.css';

const BuildPage = props => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { build, loading, logLoading } = useSelector(state => state.builds);
  const repoName = useSelector(state => state.settings.settings?.repoName || 'Build details');

  useEffect(() => {
    dispatch(getBuild(id));

    return () => {
      dispatch(clearState());
    };
  }, [id, dispatch]);

  const rebuild = () => {
    if (build) {
      dispatch(runBuild(build.commitHash, props.history));
    }
  };

  const buildPage = cn('build-page');
  const layoutProps = {
    className: buildPage(),
    headerProps: {
      type: 'primary',
      heading: <Link to={'/'}>{repoName}</Link>,
      extra: (
        <>
          <Button kind={'secondary'} size={'s'} icon={'repeat'} onClick={rebuild}>
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
      <Loader show={loading || logLoading} />
    </Layout>
  );
};

BuildPage.propTypes = {
  history: PropTypes.object,
};

export default withRouter(BuildPage);
