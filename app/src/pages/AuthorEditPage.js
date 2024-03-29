import React from 'react';
import AuthorForm from '../components/AuthorForm';
import Page from '../components/Page';

function AuthorEditPage(props) {
  const {
    params,
    title,
  } = props;

  const {
    username
  } = params || {};

  return <Page title={title}>
    <AuthorForm username={username} />
  </Page>;
}

export default AuthorEditPage;
