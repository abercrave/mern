import React, { useState } from 'react';
import Button from './Button';

function Message(props) {
  const [
    text,
    setText
  ] = useState(props.message.text);

  const {
    prompt,
    type,
  } = props.message;

  const isActive = Boolean(text && text.length);

  function close(e) {
    e.preventDefault();

    setText('');
  }

  return <div className={`message message--${type} ${isActive ? 'message--active' : ''}`}>
    <div className="message__content">
      {text} {prompt}
    </div>
    <Button classes="message__close cta" variant="secondary" onClick={close}>X</Button>
  </div>;
}

export default Message;
