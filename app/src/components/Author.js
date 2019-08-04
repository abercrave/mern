import React from 'react';
import A from './A';

function Author(props) {
  const {
    author,
    link,
  } = props;

  const {
    bio,
    firstName,
    lastName,
    username,
  } = author;

  return <article className="author">
      {link ?
        <h4>
          <A href={`/authors/${username}`}>{firstName} {lastName}</A>
        </h4> :
        <div>
          <h2>
            About {firstName} {lastName}
          </h2>
          <p>
            {bio}
          </p>
        </div>
      }
  </article>;
}

export default Author;
