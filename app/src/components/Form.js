import React from 'react';

function Form(props) {
  const {
    children,
    classes,
    submitHandler,
  } = props;

  let className = 'form';

  if (classes) {
    className += classes;
  }

  return <form className={className} onSubmit={submitHandler}>
    {children}
  </form>;
}

export default Form;
