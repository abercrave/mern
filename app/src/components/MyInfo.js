import React, { Component } from 'react';
import Anchor from '../components/Anchor';
import get from '../utils/Get.js';

class MyInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const user = await get(`${process.env.REACT_APP_API}/session`);

    this.setState({ user });
  }

  render() {
    const {
      username
    } = this.state.user;

    return <div className="my-info">
      Hi, <Anchor classes="my-info__user" href={`/users/${username}`} text={username} />!
    </div>
  }
}

export default MyInfo;
