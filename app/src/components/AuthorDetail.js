import 'dotenv/config';
import React, { Component } from 'react';
import A from './A';
import Author from './Author';
import Book from './Book';
import Cta from './Cta';
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

    return <section className={`author-detail ${username ? 'loaded' : 'loading'}`}>
      <div className="author-detail__content">
        <Author author={author} />

        <p>
          <Cta href={`/authors/${username}/edit`} variant="secondary">✎ Edit Author</Cta>
        </p>
      </div>

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
            <p>No books to display. <A href={`/books/add?author=${username}`}>Add one now!</A></p>
          )
        }
      </div>

      <p>
        <Cta href="/authors">← All Authors</Cta>
      </p>
    </section>;
  }
}

export default AuthorDetail;
