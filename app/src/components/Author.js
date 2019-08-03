import React from 'react';
import Anchor from './Anchor';

function Author(props) {
  const {
    author,
    link,
  } = props;

  const {
    bio,
    name,
    username,
  } = author;

  return <article className="author">
      {link ?
        <h4>
          <Anchor href={`/authors/${username}`} text={name} />
        </h4> :
        <div>
          <h2>
            About {name}
          </h2>
          <p>
            {bio}
          </p>
        </div>
      }
  </article>;
}

export default Author;
