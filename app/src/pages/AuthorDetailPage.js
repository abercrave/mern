import React from 'react';
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
  </Page>;
}

export default AuthorDetailPage;
