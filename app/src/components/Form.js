import React from 'react';
import Button from './Button';
import Cta from './Cta';
import Message from './Message';

function Form(props) {
  const {
    cancelHref,
    children,
    classes,
    message,
    onSubmit,
  } = props;

  let className = 'form';

  if (classes) {
    className += classes;
  }

  const hasMessage = message && message.text.length > 0;

  return <form className={className} onSubmit={onSubmit}>
    {hasMessage &&
      <Message message={message} />
    }

    {children}

    <div className="form__buttons">
      <Button>
        Save
      </Button>
      {cancelHref &&
        <Cta href={cancelHref} variant="secondary">
          Cancel
        </Cta>
      }
    </div>
  </form>;
}

export default Form;
