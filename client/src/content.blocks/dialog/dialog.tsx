import React, { createRef, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import { cn } from 'utils/bem';

import './dialog.css';

export interface DialogProps {
  popupClassName?: string;
  overlayClassName?: string;
  title?: React.ReactNode;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  open: boolean;
  disableBackdropClick?: boolean;
  disableEscapeKeyDown?: boolean;
  onClose(): any;
}

const Dialog: React.FC<DialogProps> = props => {
  const {
    popupClassName = '',
    overlayClassName = '',
    title,
    children,
    actions,
    open = false,
    disableBackdropClick = false,
    disableEscapeKeyDown = false,
    onClose,
  } = props;
  const ref = createRef<HTMLDivElement>();

  const onKeyDown = useCallback(
    evt => {
      if (evt.which === 27 && !disableEscapeKeyDown) {
        onClose();
      }
    },
    [onClose, disableEscapeKeyDown]
  );

  const onBackdropClick = useCallback(
    evt => {
      if (evt.target === evt.currentTarget && !disableBackdropClick) {
        onClose();
      }
    },
    [onClose, disableBackdropClick]
  );

  useEffect(() => {
    const dialogRef = ref && ref.current;
    if (open) {
      window.addEventListener('keydown', onKeyDown);
    }
    if (open && dialogRef) {
      dialogRef.addEventListener('click', onBackdropClick);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      if (dialogRef) {
        dialogRef.removeEventListener('click', onBackdropClick);
      }
    };
  }, [ref, open, onKeyDown, onBackdropClick]);

  const dialog = cn('dialog');
  const root = document.getElementById('dialog') || document.body;

  return ReactDOM.createPortal(
    <div className={clsx(dialog(), open && dialog({ open: true }), overlayClassName)} ref={ref}>
      <div className={clsx(dialog('popup'), popupClassName)}>
        {title && <div className={dialog('title')}>{title}</div>}
        {children && <div className={dialog('content')}>{children}</div>}
        {actions && <div className={dialog('actions')}>{actions}</div>}
      </div>
    </div>,
    root
  );
};

export default Dialog;
