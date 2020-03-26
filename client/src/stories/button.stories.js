import React from 'react';
import Button from '../base.blocks/button/button';

export default {
  title: 'Button',
  component: Button,
};

export const Default = () => (
  <>
    <h2>Primary button</h2>
    <Button kind={'primary'}>Normal</Button>
    &nbsp;
    <Button kind={'primary'} disabled>
      Disabled
    </Button>
    <h2>Secondary button</h2>
    <Button kind={'secondary'}>Normal</Button>
    &nbsp;
    <Button kind={'secondary'} disabled>
      Disabled
    </Button>
    <h2>Small button</h2>
    <Button kind={'secondary'} size={'s'}>
      Normal
    </Button>
    &nbsp;
    <Button kind={'secondary'} size={'s'} disabled>
      Disabled
    </Button>
    <h2>Icon button</h2>
    <h3>Normal</h3>
    <Button kind={'secondary'} size={'s'} icon={'settings'}>
      Settings
    </Button>
    &nbsp;
    <Button kind={'secondary'} size={'s'} icon={'play'}>
      Run build
    </Button>
    &nbsp;
    <Button kind={'secondary'} size={'s'} icon={'repeat'}>
      Rebuild
    </Button>
    <h3>Disabled</h3>
    <Button kind={'secondary'} size={'s'} icon={'settings'} disabled>
      Settings
    </Button>
    &nbsp;
    <Button kind={'secondary'} size={'s'} icon={'play'} disabled>
      Run build
    </Button>
    &nbsp;
    <Button kind={'secondary'} size={'s'} icon={'repeat'} disabled>
      Rebuild
    </Button>
    <h2>Small icon button</h2>
    <h3>Normal</h3>
    <Button kind={'secondary'} size={'xs'} icon={'settings'} />
    &nbsp;
    <Button kind={'secondary'} size={'xs'} icon={'play'} />
    &nbsp;
    <Button kind={'secondary'} size={'xs'} icon={'repeat'} />
    <h3>Disabled</h3>
    <Button kind={'secondary'} size={'xs'} icon={'settings'} disabled />
    &nbsp;
    <Button kind={'secondary'} size={'xs'} icon={'play'} disabled />
    &nbsp;
    <Button kind={'secondary'} size={'xs'} icon={'repeat'} disabled />
  </>
);
