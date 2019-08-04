import React from 'react';
import A from './A';

function Book(props) {
  const {
    book,
    link
  } = props;

  const {
    author,
    slug,
    title,
  } = book || {};

  const {
    firstName,
    lastName,
    username,
  } = author || {};

  return <article className="book">
    <h4>
      {link ?
        <A href={`/books/${slug}`}>{title}</A> :
        title
      }
    </h4>
    {username &&
      <p>
        by <A href={`/authors/${username}`}>{firstName} {lastName}</A>
      </p>
    }
  </article>;
}

export default Book;
