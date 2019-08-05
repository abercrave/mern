import React from 'react';
import AuthorForm from '../components/AuthorForm';
import Page from '../components/Page';

function AuthorAddPage(props) {
  const {
    title,
  } = props;

  return <Page title={title}>
    <AuthorForm />
  </Page>;
}

export default AuthorAddPage;
