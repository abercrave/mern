import React from 'react';
import { setLinkProps } from 'hookrouter';

function Cta(props) {
  return <a {...setLinkProps(props)} className="cta">
    {props.text}
  </a>
}

export default Cta;
