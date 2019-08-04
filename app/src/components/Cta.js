import React from 'react';
import A from './A';

function Cta(props) {
  const {
    children,
    href,
  } = props;

  let {
    classes,
    variant,
  } = props;

  classes = classes ? classes : '';
  classes += variant ? `cta--${variant}` : 'cta--primary'

  return <A classes={`cta ${classes}`} href={href}>
    {children}
  </A>
}

export default Cta;
