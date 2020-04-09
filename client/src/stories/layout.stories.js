import React from 'react';
import Layout from 'template.blocks/layout/layout';
import Button from 'base.blocks/button/button';

export default {
  title: 'Layout',
  component: Layout,
};

export const Default = () => (
  <Layout
    headerProps={{
      type: 'secondary',
      heading: 'School CI server',
      extra: (
        <Button kind={'secondary'} size={'s'} icon={'settings'}>
          Settings
        </Button>
      ),
    }}
  />
);
