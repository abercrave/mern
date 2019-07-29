import React from 'react';
import Page from '../components/Page';

function HomePage(props) {
  const {
    subtitle,
    title,
  } = props;

  return <Page title={title} subtitle={subtitle} />
}

export default HomePage;
