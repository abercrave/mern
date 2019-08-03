import React from 'react';
import Cta from '../components/Cta';
import BookDetail from '../components/BookDetail';
import Page from '../components/Page';

function BookDetailPage(props) {
  const {
    params,
    title,
  } = props;

  return <Page title={title}>
    <BookDetail slug={params.slug} />
    <Cta href="/books" text="← All books" />
  </Page>;
}

export default BookDetailPage;
