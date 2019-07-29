import 'dotenv/config';
import React, { Component } from 'react';
import Message from './Message';
import get from '../utils/Get';

class MessageDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: {},
      slug: props.slug
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const message = await get(`${process.env.REACT_APP_API}/messages/${this.state.slug}`);

    this.setState({ message });
  }

  render() {
    const {
      text,
      user,
    } = this.state.message;

    const {
      _id: userId,
      username
    } = user || {};

    return <div className={`message-detail ${text ? 'loaded' : 'loading'}`}>
      <Message text={text} userId={userId} username={username} />
    </div>
  }
}

export default MessageDetail;
