import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { cn } from 'utils/bem';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'base.blocks/button/button';
import Layout from 'template.blocks/layout/layout';
import TextField from 'base.blocks/textField/textField';
import ContentBox from 'base.blocks/contentBox/contentBox';
import Loader from 'base.blocks/loader/loader';

import { updateSettings, setValidity } from 'store/settings/updateSettings';
import { clearValidation } from 'store/settings/clearState';

import { msToMins } from 'utils/date';

import './settingsPage.css';

const SettingsPage = props => {
  const { history } = props;
  const dispatch = useDispatch();
  const { settings, loading, valid, errors } = useSelector(state => state.settings);

  useEffect(() => {
    return () => {
      dispatch(clearValidation());
    };
  }, [dispatch]);

  const settingsPage = cn('settings-page');
  const layoutProps = {
    className: settingsPage(),
    headerProps: {
      type: 'secondary',
      heading: <Link to={'/'}>School CI server</Link>,
    },
  };

  const onSumbit = evt => {
    evt.preventDefault();
    if (evt.target && evt.target.elements) {
      const { repoName, buildCommand, mainBranch, period } = evt.target.elements;
      const settings = {
        repoName: repoName.value,
        buildCommand: buildCommand.value,
        mainBranch: mainBranch.value,
        period: period.value,
      };
      dispatch(updateSettings(settings));
    }
  };

  const onFocus = evt => {
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

SettingsPage.propTypes = {
  history: PropTypes.object,
};

export default withRouter(SettingsPage);
