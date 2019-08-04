import React from 'react';
import { setLinkProps } from 'hookrouter';

function A(props) {
  const {
    children,
    isSelected,
  } = props;

  let {
    classes,
  } = props;

  classes = classes ? classes : '';
  classes += isSelected ? 'selected': '';

  return <a {...setLinkProps(props)} className={classes}>{children}</a>
}

export default A;
