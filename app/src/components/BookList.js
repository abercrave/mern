import 'dotenv/config';
import React, { Component } from 'react';
import Book from './Book';
import get from '../utils/Get';

class BookList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
    }
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const books = await get(`${process.env.REACT_APP_API}/books`)

    this.setState({ books });
  }

  render() {
    const {
      books
    } = this.state;

    return <div className={`books ${books.length ? 'loaded' : 'loading'}`}>
      {books.map(book => {
        const {
          _id: id,
        } = book;

        return <Book key={id} book={book} link />;
      })}
    </div>
  }
}

export default BookList;
