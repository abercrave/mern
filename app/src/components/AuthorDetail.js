import 'dotenv/config';
import React, { Component } from 'react';
import Book from './Book';
import Author from './Author';
import get from '../utils/Get';

class AuthorDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: props.username,
      author: {}
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const author = await get(`${process.env.REACT_APP_API}/authors/${this.state.username}`);

    this.setState({ author });
  }

  render() {
    const {
      author,
    } = this.state;

    const {
      books,
      firstName,
      lastName,
      username,
    } = author;

    return <div className={`author-detail ${username ? 'loaded' : 'loading'}`}>
      <Author author={author} />

      <div className="author-detail__books">
        <h2>
          Books by {firstName} {lastName}
        </h2>
        {books && books.length ? (
            books.map(book => {
              const {
                _id,
              } = book;

              return <Book key={_id} book={book} link />
            })
          ) : (
            <p>No books to display.</p>
          )
        }
      </div>
    </div>;
  }
}

export default AuthorDetail;
