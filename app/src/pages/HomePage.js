import React from 'react';
import A from '../components/A';
import Page from '../components/Page';

function HomePage(props) {
  const {
    subtitle,
    title,
  } = props;

  return <Page title={title} subtitle={subtitle}>
    <p>Here you'll find a list of <A href="/books">books</A> and their <A href="/authors">authors</A></p>
  </Page>
}

export default HomePage;
