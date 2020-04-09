import React from 'react';
import Build from 'content.blocks/build/build';

export default {
  title: 'Build',
  component: Build,
};

export const Default = () => (
  <>
    <h2>Success build</h2>
    <Build
      status={'success'}
      meta={{
        buildNumber: 1368,
        message: 'add documentation for postgres scaler',
        branch: 'master',
        commit: '9c9f0b9',
        author: 'Philip Kirkorov',
        date: '2020-03-29T14:00:14.451',
        duration: 800000,
      }}
    />

    <h2>Running build</h2>
    <Build
      status={'running'}
      meta={{
        buildNumber: 1368,
        message: 'add documentation for postgres scaler',
        branch: 'master',
        commit: '9c9f0b9',
        author: 'Philip Kirkorov',
        date: '2020-03-29T14:00:14.451',
        duration: 800000,
      }}
    />

    <h2>Failed build</h2>
    <Build
      status={'failed'}
      meta={{
        buildNumber: 1368,
        message: 'add documentation for postgres scaler',
        branch: 'master',
        commit: '9c9f0b9',
        author: 'Philip Kirkorov',
        date: '2020-03-29T14:00:14.451',
        duration: 800000,
      }}
    />

    <h2>Build size L</h2>
    <Build
      status={'success'}
      size={'l'}
      meta={{
        buildNumber: 1368,
        message: 'add documentation for postgres scaler',
        branch: 'master',
        commit: '9c9f0b9',
        author: 'Philip Kirkorov',
        date: '2020-03-29T14:00:14.451',
        duration: 800000,
      }}
    />
  </>
);
