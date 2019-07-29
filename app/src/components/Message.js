import React from 'react';
import Anchor from './Anchor';

function Message(props) {
  const {
    slug,
    text,
    username,
  } = props;

  return <article className="message">
    <h4>
      {slug ?
        <Anchor href={`/messages/${slug}`} text={text} /> :
        text
      }
    </h4>
    {username &&
      <p>
        by <Anchor href={`/users/${username}`} text={username} />
      </p>
    }
  </article>;
}

export default Message;
