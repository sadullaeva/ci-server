import React from 'react';
import Link from 'base.blocks/link/link';

export default {
  title: 'Link',
  component: Link,
};

export const Default = () => (
  <>
    <h2>Link</h2>
    <Link type={'primary'} href={'#'}>
      Primary
    </Link>
    &nbsp;
    <Link type={'secondary'} href={'#'}>
      Secondary
    </Link>
  </>
);
