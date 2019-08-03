import React from 'react';
import { setLinkProps } from 'hookrouter';

function Anchor(props) {
  const {
    classes,
    isSelected,
    text
  } = props;

  return <a {...setLinkProps(props)} className={`${isSelected ? 'selected': null} ${classes}`}>{text}</a>
}

export default Anchor;
