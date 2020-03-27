import React from 'react';
import Header from 'src/content.blocks/header/header';
import Button from 'src/base.blocks/button/button';

export default {
  title: 'Header',
  component: Header,
};

export const Default = () => (
  <>
    <h2>Primary header</h2>
    <Header
      type={'primary'}
      heading={'School CI server'}
      extra={
        <>
          <Button kind={'secondary'} size={'s'} icon={'play'}>
            Run build
          </Button>
          <Button kind={'secondary'} size={'xs'} icon={'settings'} />
        </>
      }
    />

    <h2>Secondary header</h2>
    <Header
      type={'secondary'}
      heading={'School CI server'}
      extra={
        <Button kind={'secondary'} size={'s'} icon={'settings'}>
          Settings
        </Button>
      }
    />
  </>
);
