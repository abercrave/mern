import React from 'react';
import Cta from '../components/Cta';
import MessageDetail from '../components/MessageDetail';
import Page from '../components/Page';

function MessageDetailPage(props) {
  const {
    params,
    title,
  } = props;

  return <Page title={title}>
    <MessageDetail slug={params.slug} />
    <Cta href="/messages" text="← All messages" />
  </Page>;
}

export default MessageDetailPage;
