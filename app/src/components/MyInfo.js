import React, { Component } from 'react';
import A from '../components/A';
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
      firstName,
      lastName,
      username,
    } = this.state.author;

    return <div className="my-info">
      Hi, <A classes="my-info__username" href={`/authors/${username}`}>{firstName} {lastName}</A>!
    </div>
  }
}

export default MyInfo;
