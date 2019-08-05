import React from 'react';
import Cta from '../components/Cta';
import Page from '../components/Page';
import AuthorList from '../components/AuthorList';

function AuthorsPage(props) {
  return <Page title={props.title}>
    <AuthorList />
    <Cta href="/authors/add">+ Add an Author</Cta>
  </Page>;
}

export default AuthorsPage;
