import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { MemoryHistory } from 'history';
import { useTranslation } from 'react-i18next';
import { cn } from 'utils/bem';

import Dialog from 'content.blocks/dialog/dialog';
import Button from 'base.blocks/button/button';
import TextField from 'base.blocks/textField/textField';

import { runBuild } from 'store/builds/runBuild';
import validateCommitHash, {
  CommitHashErrors,
  CommitHashValid,
} from 'store/builds/helpers/validateCommitHash';

import './runBuildDialog.css';

export interface RunBuildDialogProps {
  open: boolean;
  onClose: () => any;
  history: MemoryHistory;
}

const RunBuildDialog: React.FC<RunBuildDialogProps & RouteComponentProps> = props => {
  const { history, open } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [valid, setValid] = useState<CommitHashValid>(true);
  const [errors, setErrors] = useState<CommitHashErrors>({});

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(evt.target.value);
  };

  const onClear = () => {
    setValue('');
  };

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
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
      title={t('RunBuildDialog.title')}
      popupClassName={runBuildDialog()}
      actions={
        <>
          <Button kind={'primary'} type={'submit'} form={'runBuildForm'} disabled={!valid}>
            {t('RunBuildDialog.runBuild')}
          </Button>
          <Button kind={'secondary'} onClick={onClose}>
            {t('RunBuildDialog.cancel')}
          </Button>
        </>
      }
    >
      <form id={'runBuildForm'} onSubmit={onSubmit} data-testid={'run-build-dialog-form'}>
        <TextField
          id={'commitHash'}
          value={value}
          label={t('RunBuildDialog.label')}
          placeholder={t('RunBuildDialog.placeholder')}
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

export default withRouter(RunBuildDialog);
