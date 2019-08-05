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

  classes = classes ? classes : '';
  classes += variant ? `cta--${variant}` : 'cta--primary'

  return <button className={classes} onClick={onClick}>
    {children}
  </button>
}

export default Button;
