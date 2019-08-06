import React from 'react';
import Label from './Label'

function Textarea(props) {
  let {
    label,
    name,
    onChange,
    value,
  } = props;

  return <div className="input__row">
    <Label text={label}>
      <textarea name={name} value={value || ''} onChange={onChange} />
    </Label>
  </div>;
}

export default Textarea;
