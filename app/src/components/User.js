import React from 'react';
import Anchor from './Anchor';

function User(props) {
  const {
    link,
    username,
  } = props;

  return <article className="user">
    <h4>
      {link ?
        <Anchor href={`/users/${username}`} text={username} /> : 
        `User: ${username}`
      }
    </h4>
  </article>;
}

export default User;
