import 'dotenv/config';
import React, { Component } from 'react';
import Message from './Message';
import get from '../utils/Get';

class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    }
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const messages = await get(`${process.env.REACT_APP_API}/messages`)

    this.setState({ messages });
  }

  render() {
    const {
      messages
    } = this.state;

    return <div className={`messages ${messages.length ? 'loaded' : 'loading'}`}>
      {messages.map(message => {
        const {
          _id: id,
          slug,
          text,
          user
        } = message;

        const {
          _id: userId,
          username
        } = user;

        return <Message key={id} slug={slug} text={text} userId={userId} username={username} />;
      })}
    </div>
  }
}

export default MessageList;
