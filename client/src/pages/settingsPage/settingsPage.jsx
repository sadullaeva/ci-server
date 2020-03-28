import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { cn } from 'utils/bem';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'base.blocks/button/button';
import Layout from 'template.blocks/layout/layout';
import TextField from 'base.blocks/textField/textField';
import ContentBox from 'base.blocks/contentBox/contentBox';

import { updateSettings, validateSettings } from 'store/settings/updateSettings';
import { msToMins } from 'utils/date';

import './settingsPage.css';

const SettingsPage = props => {
  const { history } = props;
  const dispatch = useDispatch();
  const settings = useSelector(state => state.settings.settings);
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);

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
      const [valid, err] = validateSettings(settings);
      if (valid) {
        dispatch(updateSettings(settings));
      } else {
        setErrors(err);
        setValid(false);
      }
    }
  };

  const onFocus = evt => {
    if (evt.target.tagName === 'INPUT') {
      setErrors({});
      setValid(true);
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
        <form onSubmit={onSumbit} onFocus={onFocus}>
          <TextField
            id={'repoName'}
            label={'GitHub repository'}
            placeholder={'user-name/repo-name'}
            defaultValue={repoName}
            error={errors.repoName}
            required
            clearable
          />
          <TextField
            id={'buildCommand'}
            label={'Build command'}
            placeholder={'npm run build'}
            defaultValue={buildCommand}
            error={errors.buildCommand}
            required
            clearable
          />
          <TextField
            id={'mainBranch'}
            label={'Main branch'}
            placeholder={'master'}
            defaultValue={mainBranch}
            error={errors.mainBranch}
            clearable
          />
          <div className={settingsPage('sync')}>
            <TextField
              id={'period'}
              label={'Synchronize every'}
              placeholder={'5'}
              defaultValue={period}
              error={errors.period}
            />
            minutes
          </div>
          <div className={settingsPage('controls')}>
            <Button type={'submit'} kind={'primary'} disabled={!valid}>
              Save
            </Button>
            <Button kind={'secondary'} onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </ContentBox>
    </Layout>
  );
};

SettingsPage.propTypes = {
  history: PropTypes.object,
};

export default withRouter(SettingsPage);
