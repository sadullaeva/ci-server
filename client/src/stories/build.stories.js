import React from 'react';
import Build from 'src/content.blocks/build/build';

export default {
  title: 'Build',
  component: Build,
};

export const Default = () => (
  <>
    <h2>Success build</h2>
    <Build
      type={'success'}
      meta={{
        buildNumber: 1368,
        message: 'add documentation for postgres scaler',
        branch: 'master',
        commit: '9c9f0b9',
        author: 'Philip Kirkorov',
        date: '21 янв, 03:06',
        duration: '1 ч 20 мин',
      }}
    />

    <h2>Running build</h2>
    <Build
      type={'running'}
      meta={{
        buildNumber: 1368,
        message: 'add documentation for postgres scaler',
        branch: 'master',
        commit: '9c9f0b9',
        author: 'Philip Kirkorov',
        date: '21 янв, 03:06',
        duration: '1 ч 20 мин',
      }}
    />

    <h2>Failed build</h2>
    <Build
      type={'failed'}
      meta={{
        buildNumber: 1368,
        message: 'add documentation for postgres scaler',
        branch: 'master',
        commit: '9c9f0b9',
        author: 'Philip Kirkorov',
        date: '21 янв, 03:06',
        duration: '1 ч 20 мин',
      }}
    />

    <h2>Build size L</h2>
    <Build
      type={'success'}
      size={'l'}
      meta={{
        buildNumber: 1368,
        message: 'add documentation for postgres scaler',
        branch: 'master',
        commit: '9c9f0b9',
        author: 'Philip Kirkorov',
        date: '21 янв, 03:06',
        duration: '1 ч 20 мин',
      }}
    />
  </>
);
