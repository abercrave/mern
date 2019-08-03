import React from 'react';
import Page from '../components/Page';
import AuthorList from '../components/AuthorList';

function AuthorsPage(props) {
  return <Page title={props.title}>
    <AuthorList />
  </Page>;
}

export default AuthorsPage;
