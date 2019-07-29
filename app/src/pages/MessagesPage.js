import React from 'react';
import Page from '../components/Page';
import MessageList from '../components/MessageList';

function MessagesPage(props) {
  return <Page title={props.title}>
    <MessageList />
  </Page>;
}

export default MessagesPage;
