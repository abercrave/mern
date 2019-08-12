import 'dotenv/config';
import React, { Component } from 'react';
import Author from './Author';
import MessageContainer from '../containers/Message';
import get from '../utils/Get';

class AuthorList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authors: [],
    }
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const authors = await get(`${process.env.REACT_APP_API}/authors`);

    this.setState({ authors });
  }

  render() {
    const {
      authors
    } = this.state;

    return <div className={`authors ${authors.length ? 'loaded' : 'loading'}`}>
      <MessageContainer />

      <div className="authors__list">
        {authors.map((author, index) => <Author key={index} author={author} link />)}
      </div>
    </div>
  }
}

export default AuthorList;
