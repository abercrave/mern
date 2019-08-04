import React from 'react';
import Cta from '../components/Cta';
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
    <Cta href="/books">← All Books</Cta> <Cta href={`/books/${slug}/edit`} variant="secondary">✎ Edit Book</Cta>
  </Page>;
}

export default BookDetailPage;
