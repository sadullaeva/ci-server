import React from 'react';
import { action } from '@storybook/addon-actions';
import Placeholder from 'content.blocks/placeholder/placeholder';

export default {
  title: 'Placeholder',
  component: Placeholder,
};

export const Default = () => (
  <>
    <h2>Start page placeholder</h2>
    <Placeholder
      action={{
        content: 'Open settings',
        onClick: () => action('clicked'),
      }}
    >
      Configure repository connection and synchronization settings
    </Placeholder>
  </>
);
