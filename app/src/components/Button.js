import React from 'react';

function Button(props) {
  const {
    children,
    onClick,
  } = props;

  let {
    classes,
    variant,
  } = props;

  let className = classes ? classes : '';
  className += variant ? ` cta--${variant}` : ' cta--primary'

  return <button className={className} onClick={onClick}>
    {children}
  </button>
}

export default Button;
