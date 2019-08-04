import React from 'react';
import Cta from '../components/Cta';
import AuthorDetail from '../components/AuthorDetail';
import Page from '../components/Page';

function AuthorDetailPage(props) {
  const {
    params,
    title,
  } = props;

  const {
    username
  } = params || {};

  return <Page title={title}>
    <AuthorDetail username={username} />
    <Cta href="/authors">← All authors</Cta>
  </Page>;
}

export default AuthorDetailPage;
