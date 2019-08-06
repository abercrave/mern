import React, { Component } from 'react';
import A from './A';
import Button from './Button';
import Cta from './Cta';
import Input from './Input';
import Message from './Message';
import Textarea from './Textarea';
import get from '../utils/Get';
import post from '../utils/Post';
import put from '../utils/Put';

class AuthorForm extends Component {
  constructor(props) {
    super(props);

    const {
      username
    } = props;

    this.state = {
      didFetchData: false,
      bio: '',
      firstName: '',
      isEditing: !!username,
      lastName: '',
      message: {
        prompt: '',
        text: '',
        type: '',
      },
      username: username || '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.state.isEditing) {
      this.getData();
    }
  }

  /**
   * Retrieves author data from the API.
   */
  async getData() {
    const author = await get(`${process.env.REACT_APP_API}/authors/${this.state.username}`);
    const {
      bio,
      firstName,
      lastName,
    } = author;

    this.setState({
      didFetchData: true,
      bio,
      firstName,
      lastName,
    });
  }

  handleChange(e) {
    const {
      name,
      value,
    } = e.target;

    this.setState({
      [name]: value
    });
  }

  async handleSubmit(e) {
    e.preventDefault();

    this.setState({
      message: {
        prompt: '',
        text: '',
        type: '',
      }
    });

    const {
      bio,
      firstName,
      lastName,
      username,
    } = this.state;

    const data = {
      bio,
      firstName,
      lastName,
      username,
    };

    let response;

    if (this.state.isEditing) {
      response = await put(`${process.env.REACT_APP_API}/authors/${this.state.username}`, data);
    } else {
      response = await post(`${process.env.REACT_APP_API}/authors`, data);
    }

    const success = typeof response._id !== 'undefined';

    this.setState({
      message: {
        prompt: success ? <A classes="message__prompt" href={`/authors/${username}`}>View {firstName} {lastName}</A> : '',
        text: success ? 'Author saved! ' : `${response.error} Please try again later.`,
        type: success ? 'success' : 'error',
      }
    });
  }

  render() {
    const {
      didFetchData,
      isEditing,
      message,
      username,
    } = this.state;

    const hasMessage = message.text.length > 0;

    return <div>
      {didFetchData &&
        <form className="form" onSubmit={this.handleSubmit}>
          {hasMessage &&
            <Message message={message} />
          }

          <Input label="First Name" name="firstName" type="text" value={this.state.firstName} onChange={this.handleChange} />

          <Input label="Last Name" name="lastName" type="text" value={this.state.lastName} onChange={this.handleChange} />

          <Input label="Username" name="username" type="text" value={this.state.username} onChange={this.handleChange} />

          <Textarea label="Bio" name="bio" value={this.state.bio} onChange={this.handleChange} />

          <div className="form__buttons">
            <Button>
              Save
            </Button>
            <Cta href={`/authors${isEditing ? '/' + username : null}`} variant="secondary">
              Cancel
            </Cta>
          </div>
        </form>
      }
    </div>
  }
}

export default AuthorForm;
