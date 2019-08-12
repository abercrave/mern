import React, { Component } from 'react';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../constants/message-categories';
import FormContainer from '../containers/Form';
import Input from './Input';
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
      data: {},
      isEditing: !!username,
      username: props.username || null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitData = this.submitData.bind(this);
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
    const {
      bio,
      firstName,
      lastName,
      username,
    } = await get(`${process.env.REACT_APP_API}/authors/${this.state.username}`);

    this.setState({
      data: {
        bio,
        firstName,
        lastName,
        username,
      }
    });
  }

  handleChange(e) {
    const {
      name,
      value,
    } = e.target;

    this.setState({
      data: {
        ...this.state.data,
        [name]: value
      }
    });
  }

  async submitData() {
    const {
      data,
      isEditing,
    } = this.state;

    // Read the data payload.
    const {
      firstName,
      lastName,
      username,
    } = data;

    // Determine REST method.
    let method = isEditing ? put : post;

    // Determine API URL.
    let url = `${process.env.REACT_APP_API}/authors`;

    if (isEditing) {
      url += `/${this.state.username}`;
    }

    // Make the request.
    const response = await method(url, data);

    // Determine if request was successful.
    const success = !response.error

    // Generate new status message.
    const message = {
      category: success ? SUCCESS_MESSAGE : ERROR_MESSAGE,
      persist: success,
      prompt: success && !isEditing ? { href: `/authors/${username}`, text: `View ${firstName} ${lastName}` } : null,
      text: success ? 'Author saved! ' : `${response.error} Please try again later.`,
    };

    return message;
  }

  render() {
    const {
      data,
      isEditing,
    } = this.state;

    const {
      bio,
      firstName,
      lastName,
      username,
    } = data || {};

    const backUrl = `/authors${isEditing ? '/' + username : null}`;

    return <FormContainer backUrl={backUrl} classes="form--author" submitData={this.submitData}>
      <Input label="First Name" name="firstName" type="text" value={firstName} onChange={this.handleChange} />
      <Input label="Last Name" name="lastName" type="text" value={lastName} onChange={this.handleChange} />
      <Input label="Username" name="username" type="text" value={username} onChange={this.handleChange} />
      <Textarea label="Bio" name="bio" value={bio} onChange={this.handleChange} />
    </FormContainer>
  }
}

export default AuthorForm;
