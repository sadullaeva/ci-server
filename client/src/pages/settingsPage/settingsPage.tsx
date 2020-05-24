import React, { useEffect } from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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

import './settingsPage.css';

export interface SettingsPageProps {
  history: MemoryHistory;
}

const SettingsPage: React.FC<SettingsPageProps & RouteComponentProps> = props => {
  const { history } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { settings, loading, valid, errors } = useSelector((state: State) => state.settings);

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
      heading: <Link to={'/'}>{t('SettingsPage.title')}</Link>,
    },
  };

  const onSumbit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    const form = evt.target as HTMLFormElement;
    if (form && form.elements) {
      const repoName = form.elements.namedItem('repoName') as HTMLInputElement;
      const buildCommand = form.elements.namedItem('buildCommand') as HTMLInputElement;
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
  const periodI18n = parseInt(period) || 0;

  return (
    <Layout {...layoutProps}>
      <ContentBox className={settingsPage('content')}>
        <h2 className={settingsPage('title')}>{t('SettingsPage.heading')}</h2>
        <div className={settingsPage('description')}>{t('SettingsPage.text')}</div>
        <form onSubmit={onSumbit} onFocus={onFocus} data-testid={'settings-page-form'}>
          {errors.general && <div className={settingsPage('general-error')}>{errors.general}</div>}
          <TextField
            id={'repoName'}
            label={t('SettingsPage.repoName.label')}
            placeholder={t('SettingsPage.repoName.placeholder')}
            defaultValue={repoName}
            error={errors.repoName}
            tabIndex={1}
            required
            clearable
            data-testid={'settings-page-repo-name'}
          />
          <TextField
            id={'buildCommand'}
            label={t('SettingsPage.buildCommand.label')}
            placeholder={t('SettingsPage.buildCommand.placeholder')}
            defaultValue={buildCommand}
            error={errors.buildCommand}
            tabIndex={2}
            required
            clearable
            data-testid={'settings-page-build-command'}
          />
          <TextField
            id={'mainBranch'}
            label={t('SettingsPage.mainBranch.label')}
            placeholder={t('SettingsPage.mainBranch.placeholder')}
            defaultValue={mainBranch}
            error={errors.mainBranch}
            tabIndex={3}
            clearable
            data-testid={'settings-page-main-branch'}
          />
          <div className={settingsPage('sync')}>
            <TextField
              id={'period'}
              label={t('SettingsPage.period.label', { count: periodI18n })}
              placeholder={t('SettingsPage.period.placeholder')}
              defaultValue={period}
              error={errors.period}
              tabIndex={4}
              data-testid={'settings-page-period'}
            />
            {t('SettingsPage.period.min', { count: periodI18n })}
          </div>
          <div className={settingsPage('controls')}>
            <Button type={'submit'} kind={'primary'} disabled={!valid} tabIndex={5}>
              {t('SettingsPage.save')}
            </Button>
            <Button kind={'secondary'} onClick={onCancel} tabIndex={6}>
              {t('SettingsPage.cancel')}
            </Button>
          </div>
        </form>
      </ContentBox>
      <Loader show={loading} disableTimeout />
    </Layout>
  );
};

export default withRouter(SettingsPage);
