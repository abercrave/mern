import React from 'react';
import { setLinkProps } from 'hookrouter';

function Anchor(props) {
  const {
    isSelected,
    text
  } = props;

  return <a {...setLinkProps(props)} className={isSelected ? 'selected': null}>{text}</a>
}

export default Anchor;
