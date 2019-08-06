import React from 'react';
import Label from './Label'

function Input(props) {
  let {
    label,
    name,
    onChange,
    type,
    value,
  } = props;

  return <div className="input__row">
    <Label text={label}>
      <input name={name} type={type || 'text'} value={value || ''} onChange={onChange} />
    </Label>
  </div>
}

export default Input;
