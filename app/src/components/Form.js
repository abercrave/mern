import React from 'react';
import { navigate } from 'hookrouter';
import { ERROR_MESSAGE } from '../constants/message-categories';
import Button from './Button';
import Cta from './Cta';
import MessageContainer from '../containers/Message';

function Form({ backUrl, children, classes, addMessage, removeMessage, submitData }) {
  let className = 'form';

  if (classes) {
    className += ` ${classes}`;
  }

  async function onSubmit(e) {
    e.preventDefault();

    // Clear an existing message with the "remove message" action.
    removeMessage();

    // Submit the data and get a new message.
    const message = await submitData();

    if (message) {
      if (backUrl && message.category !== ERROR_MESSAGE) {
        // Navigate back if submission was successful.
        navigate(backUrl);

        // Add message after navigation has occurred. The destination page will be responsible for
        // displaying it.
        setTimeout(() => {
          addMessage(message);
        });
      } else {
        // Display message above form.
        addMessage(message);
      }
    }
  }

  return <form className={className} onSubmit={onSubmit}>
    <MessageContainer />

    {children}

    <div className="form__buttons">
      <Button>
        Save
      </Button>
      {backUrl &&
        <Cta href={backUrl} variant="secondary">
          Cancel
        </Cta>
      }
    </div>
  </form>
}

export default Form;
