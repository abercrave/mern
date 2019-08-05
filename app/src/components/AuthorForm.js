import React, { Component } from 'react';
import A from './A';
import Button from './Button';
import Cta from './Cta';
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

  async getData() {
    const author = await get(`${process.env.REACT_APP_API}/authors/${this.state.username}`);
    const {
      bio,
      firstName,
      lastName,
    } = author;

    this.setState({
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

    const didSubmit = response && response._id;

    this.setState({
      message: {
        prompt: didSubmit ? <A classes="message__prompt" href={`/authors/${username}`}>View {firstName} {lastName}</A> : '',
        text: didSubmit ? 'Author saved! ' : `${response.error} Please try again later.`,
        type: didSubmit ? 'success' : 'error',
      }
    });
  }

  render() {
    const {
      isEditing,
      message,
      username,
    } = this.state;

    console.log('isEditing:', isEditing);

    return <form className="form" onSubmit={this.handleSubmit}>
      {message.text !== '' &&
        <div className={`message message--${message.type}`}>
          {message.text} {message.prompt}
        </div>
      }
      <div className="input__row">
        <label>
          <span className="input__label">
            First name
          </span>
          <input name="firstName" type="text" value={this.state.firstName} onChange={this.handleChange} />
        </label>
      </div>
      <div className="input__row">
        <label>
          <span className="input__label">Last name</span>
          <input name="lastName" type="text" value={this.state.lastName} onChange={this.handleChange} />
        </label>
      </div>
      <div className="input__row">
        <label>
          <span className="input__label">
            Username
          </span>
          <input name="username" type="text" value={this.state.username} onChange={this.handleChange} readOnly={isEditing} title={`${isEditing && 'Changing a username is not allowed.'}`}/>
        </label>
      </div>
      <div className="input__row">
        <label>
          <span className="input__label">
            Bio
          </span>
          <textarea name="bio" type="text" value={this.state.bio} onChange={this.handleChange} />
        </label>
      </div>
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
}

export default AuthorForm;
