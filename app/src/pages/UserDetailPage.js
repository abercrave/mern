import React from 'react';
import Cta from '../components/Cta';
import UserDetail from '../components/UserDetail';
import Page from '../components/Page';

function UserDetailPage(props) {
  const {
    params,
    title,
  } = props;

  return <Page title={title}>
    <UserDetail id={params.id} />
    <Cta href="/users" text="← Back to users" />
  </Page>;
}

export default UserDetailPage;
