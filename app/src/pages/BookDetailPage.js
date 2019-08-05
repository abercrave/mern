import React from 'react';
import BookDetail from '../components/BookDetail';
import Page from '../components/Page';

function BookDetailPage(props) {
  const {
    params,
    title,
  } = props;

  const {
    slug
  } = params || {};

  return <Page title={title}>
    <BookDetail slug={slug} />
  </Page>;
}

export default BookDetailPage;
