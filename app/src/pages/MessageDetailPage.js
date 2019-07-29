import React from 'react';
import MessageDetail from '../components/MessageDetail';
import Page from '../components/Page';

function MessageDetailPage(props) {
  const {
    params,
    title,
  } = props;

  return <Page title={title}>
    <MessageDetail slug={params.slug} />
  </Page>;
}

export default MessageDetailPage;
