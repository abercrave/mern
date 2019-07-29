import 'dotenv/config';
import React, { Component } from 'react';
import Message from './Message';
import User from './User';
import get from '../utils/Get';

class UserDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      user: {}
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const user = await get(`${process.env.REACT_APP_API}/users/${this.state.id}`);

    this.setState({ user });
  }

  render() {
    const {
      _id,
      messages,
      username,
    } = this.state.user;

    return <div className={`user-detail ${_id ? 'loaded' : 'loading'}`}>
      <User id={_id} username={username} />

      <div className="user-detail__messages">
        <h2>Messages</h2>
        {messages && messages.length ? (
            messages.map(message => {
              const {
                _id,
                slug,
                text,
              } = message;

              return <Message key={_id} slug={slug} text={text} />
            })
          ) : (
            <p>No messages to display.</p>
          )
        }
      </div>
    </div>;
  }
}

export default UserDetail;
