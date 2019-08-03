import React, { Component } from 'react';
import Anchor from '../components/Anchor';
import get from '../utils/Get.js';

class MyInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: {}
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const author = await get(`${process.env.REACT_APP_API}/session`);

    this.setState({ author });
  }

  render() {
    const {
      username
    } = this.state.author;

    return <div className="my-info">
      Hi, <Anchor classes="my-info__username" href={`/authors/${username}`} text={username} />!
    </div>
  }
}

export default MyInfo;
