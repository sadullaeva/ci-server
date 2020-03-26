import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { cn } from 'utils/bem';

import 'textField.css';

const TextField = props => {
  const {
    className = '',
    required = false,
    clearable = false,
    label = '',
    placeholder = '',
    id,
    onClear,
    ...other
  } = props;
  const ref = createRef();

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
    required && textField({ required: true })
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
    </div>
  );
};

TextField.propTypes = {
  className: PropTypes.string,
  required: PropTypes.bool,
  clearable: PropTypes.bool,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
};

export default TextField;
