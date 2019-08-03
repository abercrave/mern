import React from 'react';
import Anchor from './Anchor';

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
    name,
    username,
  } = author || {};

  return <article className="book">
    <h4>
      {link ?
        <Anchor href={`/books/${slug}`} text={title} /> :
        title
      }
    </h4>
    {username &&
      <p>
        by <Anchor href={`/authors/${username}`} text={name} />
      </p>
    }
  </article>;
}

export default Book;
