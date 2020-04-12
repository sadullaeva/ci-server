import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { cn } from 'utils/bem';

import Dialog from 'content.blocks/dialog/dialog';
import Button from 'base.blocks/button/button';
import TextField from 'base.blocks/textField/textField';

import { runBuild } from 'store/builds/runBuild';
import validateCommitHash from 'store/builds/helpers/validateCommitHash';

import './runBuildDialog.css';

const RunBuildDialog = props => {
  const { history, open } = props;
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [valid, setValid] = useState(true);
  const [errors, setErrors] = useState({});

  const onChange = evt => {
    setValue(evt.target.value);
  };

  const onClear = () => {
    setValue('');
  };

  const onSubmit = evt => {
    evt.preventDefault();
    const commitHash = value;
    const [valid, err] = validateCommitHash(commitHash);
    if (valid) {
      dispatch(runBuild(commitHash, history));
    } else {
      setErrors(err);
      setValid(valid);
    }
  };

  const onFocus = () => {
    setErrors({});
    setValid(true);
  };

  const onClose = () => {
    setValue('');
    props.onClose();
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
          <Button kind={'primary'} type={'submit'} form={'runBuildForm'} disabled={!valid}>
            Run build
          </Button>
          <Button kind={'secondary'} onClick={onClose}>
            Cancel
          </Button>
        </>
      }
    >
      <form id={'runBuildForm'} onSubmit={onSubmit} data-testid={'run-build-dialog-form'}>
        <TextField
          id={'commitHash'}
          value={value}
          label={'Enter the commit hash which you want to build'}
          placeholder={'Commit hash'}
          error={errors.commitHash}
          onChange={onChange}
          onFocus={onFocus}
          onClear={onClear}
          clearable
          autoFocus
          data-testid={'run-build-dialog-input'}
        />
      </form>
    </Dialog>
  );
};

RunBuildDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  history: PropTypes.object,
};

export default withRouter(RunBuildDialog);
