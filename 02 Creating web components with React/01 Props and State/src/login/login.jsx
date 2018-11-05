import React, { Component } from 'react';
import { LoginStateless } from './loginStateless';
import { createEmptyState } from './login.state';

export class Login extends Component {
  state = createEmptyState();

  componentDidMount() {
    if (this.props.user) {
      this.loadUser(this.props);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.name !== this.props.user.name) {
      this.loadUser(nextProps);
    }
  }

  loadUser = props => {
    this.setState({
      user: props.user,
    });
  };

  onFieldChange = (fieldName, value) => {
    this.setState({
      user: {
        ...this.state.user,
        [fieldName]: value,
      },
    });

    if (this.props.onChange) {
      this.props.onChange(fieldName, value);
    }
  };

  onLogin = () => {
    // Do a login API request
    console.log('Run login API request');
  };

  render() {
    return (
      <LoginStateless
        user={this.state.user}
        onFieldChange={this.onFieldChange}
        onLogin={this.onLogin}
      />
    );
  }
}
