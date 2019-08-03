import React from 'react';
import { useTitle } from 'hookrouter';

function Page(props) {
  const {
    children,
    subtitle,
    title,
  } = props;

  useTitle(title);

  return <main className="page">
    <header className="page__header">
      <h1 className="page__title">{title}</h1>
      {subtitle &&
        <p className="page__subtitle">{subtitle}</p>
      }
    </header>
    <div className="page__content">
      {children}
    </div>
  </main>;
}

export default Page;
