import React from 'react';
import PropTypes from 'prop-types';
import { cn } from 'utils/bem';

import Dialog from 'content.blocks/dialog/dialog';
import Button from 'base.blocks/button/button';
import TextField from 'base.blocks/textField/textField';

import './runBuildDialog.css';

const RunBuildDialog = props => {
  const { open, onClose } = props;

  const onSubmit = evt => {
    evt.preventDefault();
    if (evt.target && evt.target.elements) {
      const commitHash = evt.target.elements.commitHash?.value;
      // todo: send request
    }
  };

  const runBuildDialog = cn('run-build-dialog');

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title={'New build'}
      popupClassName={runBuildDialog()}
      actions={
        <>
          <Button kind={'primary'} type={'submit'} form={'runBuildForm'}>
            Run build
          </Button>
          <Button kind={'secondary'} onClick={onClose}>
            Cancel
          </Button>
        </>
      }
    >
      <form id={'runBuildForm'} onSubmit={onSubmit}>
        <TextField
          id={'commitHash'}
          label={'Enter the commit hash which you want to build'}
          placeholder={'Commit hash'}
          clearable
          autoFocus
        />
      </form>
    </Dialog>
  );
};

RunBuildDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default RunBuildDialog;
