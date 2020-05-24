import React, { useEffect } from 'react';
import { Link, useParams, withRouter, RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MemoryHistory } from 'history';
import { useTranslation } from 'react-i18next';
import { cn } from 'utils/bem';

import Button from 'base.blocks/button/button';
import Layout, { LayoutProps } from 'template.blocks/layout/layout';
import Build from 'content.blocks/build/build';
import ContentBox from 'base.blocks/contentBox/contentBox';
import BuildLog from 'containers/buildLog/buildLog';
import Loader from 'base.blocks/loader/loader';

import { getBuild } from 'store/builds/getBuild';
import { clearState } from 'store/builds/clearState';
import { runBuild } from 'store/builds/runBuild';

import { State } from 'store/store';

import { getBuildStatus } from 'utils/build';

import './buildPage.css';

export interface BuildPageProps {
  history: MemoryHistory;
}

const BuildPage: React.FC<BuildPageProps & RouteComponentProps> = props => {
  const { id = '' } = useParams();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { build, loading, logLoading } = useSelector((state: State) => state.builds);
  const repoName = useSelector(
    (state: State) => state.settings.settings?.repoName || t('BuildPage.title')
  );

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
  const layoutProps: LayoutProps = {
    className: buildPage(),
    headerProps: {
      type: 'primary',
      heading: <Link to={'/'}>{repoName}</Link>,
      extra: (
        <>
          <Button
            kind={'secondary'}
            size={'s'}
            icon={'repeat'}
            onClick={rebuild}
            data-testid={'rebuild'}
          >
            {t('BuildPage.rebuild')}
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

export default withRouter(BuildPage);
