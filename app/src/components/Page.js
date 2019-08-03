import React from 'react';
import { useTitle } from 'hookrouter';

function Page(props) {
  const {
    children,
    subtitle,
    title,
  } = props;

  useTitle(title);

  return <div className="page">
    <div className="page__content">
      <header>
        <h1>{title}</h1>
        {subtitle &&
          <p>{subtitle}</p>
        }
      </header>
      <main>
        {children}
      </main>
    </div>
  </div>;
}

export default Page;
