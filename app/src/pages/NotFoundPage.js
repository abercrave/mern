import React from 'react';
import A from '../components/A';
import Page from '../components/Page';

function NotFoundPage(props) {
  return <Page title="404 Not Found" subtitle="Please try again.">
    <p>
      Nothing to see here. Time to head <A href="/">home</A>.
    </p>
  </Page>
}

export default NotFoundPage;
