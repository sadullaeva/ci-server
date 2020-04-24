import React, { useEffect } from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { cn } from 'utils/bem';
import { useDispatch, useSelector } from 'react-redux';
import { MemoryHistory } from 'history';

import Button from 'base.blocks/button/button';
import Layout, { LayoutProps } from 'template.blocks/layout/layout';
import TextField from 'base.blocks/textField/textField';
import ContentBox from 'base.blocks/contentBox/contentBox';
import Loader from 'base.blocks/loader/loader';

import { updateSettings, setValidity } from 'store/settings/updateSettings';
import { clearValidation } from 'store/settings/clearState';

import { msToMins } from 'utils/date';

import { State } from 'store/store';
import { SettingsState } from 'store/settings/reducer';

import './settingsPage.css';

export interface SettingsPageProps {
  history: MemoryHistory;
}

const SettingsPage: React.FC<SettingsPageProps & RouteComponentProps> = props => {
  const { history } = props;
  const dispatch = useDispatch();
  const { settings, loading, valid, errors } = useSelector(
    (state: State): SettingsState => state.settings
  );

  useEffect(() => {
    return () => {
      dispatch(clearValidation());
    };
  }, [dispatch]);

  const settingsPage = cn('settings-page');
  const layoutProps: LayoutProps = {
    className: settingsPage(),
    headerProps: {
      type: 'secondary',
      heading: <Link to={'/'}>School CI server</Link>,
    },
  };

  const onSumbit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    const form = evt.target as HTMLFormElement;
    if (form && form.elements) {
      const repoName = form.elements.namedItem('repoName') as HTMLInputElement;
      const buildCommand = form.elements.namedItem('mainBranch') as HTMLInputElement;
      const mainBranch = form.elements.namedItem('mainBranch') as HTMLInputElement;
      const period = form.elements.namedItem('period') as HTMLInputElement;
      const settings = {
        repoName: repoName.value,
        buildCommand: buildCommand.value,
        mainBranch: mainBranch.value,
        period: period.value,
      };
      dispatch(updateSettings(settings));
    }
  };

  const onFocus = (evt: React.FocusEvent<HTMLFormElement>): void => {
    if (evt.target.tagName === 'INPUT') {
      dispatch(setValidity([true, {}]));
    }
  };

  const onCancel = () => {
    history.push('/');
  };

  const { repoName = '', buildCommand = '', mainBranch = '' } = settings || {};
  const period = settings?.period ? msToMins(settings.period).toString() : '';

  return (
    <Layout {...layoutProps}>
      <ContentBox className={settingsPage('content')}>
        <h2 className={settingsPage('title')}>Settings</h2>
        <div className={settingsPage('description')}>
          Configure repository connection and synchronization settings.
        </div>
        <form onSubmit={onSumbit} onFocus={onFocus} data-testid={'settings-page-form'}>
          {errors.general && <div className={settingsPage('general-error')}>{errors.general}</div>}
          <TextField
            id={'repoName'}
            label={'GitHub repository'}
            placeholder={'user-name/repo-name'}
            defaultValue={repoName}
            error={errors.repoName}
            tabIndex={1}
            required
            clearable
            data-testid={'settings-page-repo-name'}
          />
          <TextField
            id={'buildCommand'}
            label={'Build command'}
            placeholder={'npm run build'}
            defaultValue={buildCommand}
            error={errors.buildCommand}
            tabIndex={2}
            required
            clearable
            data-testid={'settings-page-build-command'}
          />
          <TextField
            id={'mainBranch'}
            label={'Main branch'}
            placeholder={'master'}
            defaultValue={mainBranch}
            error={errors.mainBranch}
            tabIndex={3}
            clearable
            data-testid={'settings-page-main-branch'}
          />
          <div className={settingsPage('sync')}>
            <TextField
              id={'period'}
              label={'Synchronize every'}
              placeholder={'5'}
              defaultValue={period}
              error={errors.period}
              tabIndex={4}
              data-testid={'settings-page-period'}
            />
            minutes
          </div>
          <div className={settingsPage('controls')}>
            <Button type={'submit'} kind={'primary'} disabled={!valid} tabIndex={5}>
              Save
            </Button>
            <Button kind={'secondary'} onClick={onCancel} tabIndex={6}>
              Cancel
            </Button>
          </div>
        </form>
      </ContentBox>
      <Loader show={loading} disableTimeout />
    </Layout>
  );
};

export default withRouter(SettingsPage);
