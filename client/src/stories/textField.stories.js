import React, { useState } from 'react';
import TextField from 'base.blocks/textField/textField';

export default {
  title: 'Text field',
  component: TextField,
};

export const Default = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <h2>Text field required and controlled</h2>
      <TextField
        id={'textField1'}
        placeholder={'user-name/repo-name'}
        label={'GitHub repository'}
        value={value}
        onChange={evt => {
          setValue(evt.target.value);
        }}
        required
      />

      <h2>Text field clearable and uncontrolled</h2>
      <TextField
        id={'textField2'}
        label={'Build command'}
        defaultValue={'npm i && npm run build'}
        clearable
      />

      <h2>Just text field</h2>
      <TextField id={'textField3'} defaultValue={'Hello!'} />

      <h2>Text field invalid</h2>
      <TextField id={'textField4'} label={'Build command'} required clearable invalid />

      <h2>Text field invalid with error</h2>
      <TextField
        id={'textField5'}
        label={'Build command'}
        required
        clearable
        error={'This field should not be empty'}
      />
    </>
  );
};
