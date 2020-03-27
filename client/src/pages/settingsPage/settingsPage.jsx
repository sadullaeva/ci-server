import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from 'utils/bem';

import Button from 'base.blocks/button/button';
import Layout from 'template.blocks/layout/layout';
import TextField from 'base.blocks/textField/textField';
import ContentBox from 'base.blocks/contentBox/contentBox';

import './settingsPage.css';

const SettingsPage = props => {
  const settingsPage = cn('settings-page');
  const layoutProps = {
    className: settingsPage(),
    headerProps: {
      type: 'secondary',
      heading: <Link to={'/'}>School CI server</Link>,
    },
  };

  return (
    <Layout {...layoutProps}>
      <ContentBox className={settingsPage('content')}>
        <h2 className={settingsPage('title')}>Settings</h2>
        <div className={settingsPage('description')}>
          Configure repository connection and synchronization settings.
        </div>
        <form>
          <TextField
            id={'repoName'}
            label={'GitHub repository'}
            placeholder={'user-name/repo-name'}
            required
            clearable
          />
          <TextField
            id={'buildCommand'}
            label={'Build command'}
            placeholder={'npm run build'}
            clearable
          />
          <TextField id={'mainBranch'} label={'Main branch'} placeholder={'master'} clearable />
          <div className={settingsPage('sync')}>
            <TextField id={'sync'} label={'Synchronize every'} placeholder={'5'} />
            minutes
          </div>
          <div className={settingsPage('controls')}>
            <Button type={'submit'} kind={'primary'}>
              Save
            </Button>
            <Button kind={'secondary'}>Cancel</Button>
          </div>
        </form>
      </ContentBox>
    </Layout>
  );
};

SettingsPage.propTypes = {};

export default SettingsPage;
