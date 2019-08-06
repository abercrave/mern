import React from 'react';

function Label(props) {
  return <label>
    <span className="input__label">
      {props.text}
    </span>
    {props.children}
  </label>;
}

export default Label;
