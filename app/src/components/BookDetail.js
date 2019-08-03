import 'dotenv/config';
import React, { Component } from 'react';
import Book from './Book';
import get from '../utils/Get';

class BookDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: {},
      slug: props.slug
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const book = await get(`${process.env.REACT_APP_API}/books/${this.state.slug}`);

    this.setState({ book });
  }

  render() {
    const {
      book,
    } = this.state;

    const {
      title,
    } = book || {};

    return <div className={`book-detail ${title ? 'loaded' : 'loading'}`}>
      <Book book={book} />
    </div>
  }
}

export default BookDetail;
