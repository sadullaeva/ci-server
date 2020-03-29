import React, { useState } from 'react';
import Dialog from 'base.blocks/dialog/dialog';
import Button from 'base.blocks/button/button';
import TextField from 'base.blocks/textField/textField';

export default {
  title: 'Dialog',
  component: Dialog,
};

export const Default = () => {
  const [open, setOpen] = useState(false);
  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);
  return (
    <>
      <Button onClick={openDialog}>Open dialog</Button>
      <Dialog
        title={'New build'}
        actions={
          <>
            <Button kind={'primary'}>Run build</Button>
            <Button kind={'secondary'} onClick={closeDialog}>
              Cancel
            </Button>
          </>
        }
        open={open}
        onClose={closeDialog}
      >
        <TextField
          id={'commitHash'}
          label={'Enter the commit hash which you want to build'}
          placeholder={'Commit hash'}
          clearable
        />
      </Dialog>
    </>
  );
};
