import React, { ChangeEventHandler, createRef } from 'react';
import clsx from 'clsx';
import { cn } from 'utils/bem';

import './textField.css';

export type TextFieldProps = React.HTMLProps<HTMLInputElement> & {
  className?: string;
  required?: boolean;
  clearable?: boolean;
  invalid?: boolean;
  value?: string;
  defaultValue?: string;
  label?: string;
  placeholder?: string;
  error?: string;
  id: string;
  onChange?: ChangeEventHandler;
  onClear?(): any;
};

const TextField: React.FC<TextFieldProps> = props => {
  const {
    className = '',
    required = false,
    clearable = false,
    invalid = false,
    label = '',
    placeholder = '',
    error = '',
    id,
    onClear,
    ...other
  } = props;
  const ref = createRef<HTMLInputElement>();

  const clear = () => {
    const input = ref && ref.current && ref.current.querySelector('input');
    if (input) {
      input.value = '';
    }
    if (onClear) {
      onClear();
    }
  };

  const textField = cn('text-field');
  const classes = clsx(
    textField(),
    className,
    clearable && textField({ clearable: true }),
    required && textField({ required: true }),
    (invalid || error) && textField({ invalid: true })
  );

  return (
    <div className={classes} ref={ref}>
      {label && (
        <label className={textField('label')} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={textField('input-container')}>
        <input
          id={id}
          type={'text'}
          placeholder={placeholder}
          className={textField('input')}
          {...other}
        />
        {clearable && <button type={'button'} className={textField('reset')} onClick={clear} />}
      </div>
      {error && <div className={textField('error')}>{error}</div>}
    </div>
  );
};

export default TextField;
