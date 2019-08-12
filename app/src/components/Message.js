import React, { useEffect } from 'react';
import A from './A';
import Button from './Button';

function Message({ message, removeMessage }) {
  const {
    category,
    prompt,
    text,
  } = message;

  let className = 'message';

  if (category.trim().length) {
    className += ` message--${category}`;
  }

  if (text.trim().length) {
    className += ' message--active';
  }

  useEffect(() => {
    // Remove persisted messages when component is unmounted.
    return function cleanup() {
      removeMessage();
    };
  }, [removeMessage]);

  return <div className={className}>
    <div className="message__content">
      {text} {prompt &&
        <A classes="message__prompt" href={prompt.href}>{prompt.text}</A>
      }
    </div>
    <Button classes="message__close cta" variant="secondary" onClick={removeMessage}>X</Button>
  </div>;
}

export default Message;
