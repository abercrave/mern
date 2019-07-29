import React from 'react';
import Page from '../components/Page';
import UserList from '../components/UserList';

function UsersPage(props) {
  return <Page title={props.title}>
    <UserList />
  </Page>;
}

export default UsersPage;
