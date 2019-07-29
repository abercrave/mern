import React from 'react';
import UserDetail from '../components/UserDetail';
import Page from '../components/Page';

function UserDetailPage(props) {
  const {
    params,
    title,
  } = props;

  return <Page title={title}>
    <UserDetail id={params.id} />
  </Page>;
}

export default UserDetailPage;
