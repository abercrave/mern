import React from 'react';
import Page from '../components/Page';
import BookList from '../components/BookList';

function BooksPage(props) {
  return <Page title={props.title}>
    <BookList />
  </Page>;
}

export default BooksPage;
