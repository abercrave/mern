import 'dotenv/config';
import React, { Component } from 'react';
import User from './User';
import get from '../utils/Get';

class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const users = await get(`${process.env.REACT_APP_API}/users`);

    this.setState({ users });
  }

  render() {
    const {
      users
    } = this.state;

    return <div className={`users ${users.length ? 'loaded' : 'loading'}`}>
      {users.map(user => {
        const {
          _id,
          username
        } = user;

        return <User key={_id} link={true} username={username} />;
      })}
    </div>
  }
}

export default MessageList;
