import React from 'react';
import { useTitle } from 'hookrouter';

function Page(props) {
  const {
    children,
    subtitle,
    title,
  } = props;

  useTitle(title);

  return <div className="page-content">
    <header>
      <h1>{title}</h1>
      {subtitle &&
        <p>{subtitle}</p>
      }
    </header>
    {children}
  </div>;
}

export default Page;
