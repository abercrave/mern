import React from 'react';
import Cta from '../components/Cta';
import AuthorDetail from '../components/AuthorDetail';
import Page from '../components/Page';

function AuthorEditPage(props) {
  const {
    params,
    title,
  } = props;

  return <Page title={title}>
    <AuthorDetail id={params.id} />
    <Cta href="/authors">← Back to authors</Cta>
  </Page>;
}

export default AuthorEditPage;
