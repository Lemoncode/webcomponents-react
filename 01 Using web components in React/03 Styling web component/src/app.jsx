import React, { Component } from 'react';
import { createEmptyUser } from './model';
import { Form } from './form';

export class App extends Component {
  state = {
    user: createEmptyUser(),
    countries: [
      { id: '1', name: 'Spain' },
      { id: '2', name: 'France' },
      { id: '3', name: 'United Kingdom' },
    ],
  };

  onFieldChange = (fieldName, value) => {
    this.setState({
      user: {
        ...this.state.user,
        [fieldName]: value,
      },
    });
  };

  onSubmit = () => {
    alert(JSON.stringify(this.state.user));
  };

  render() {
    return (
      <Form
        user={this.state.user}
        onFieldChange={this.onFieldChange}
        countries={this.state.countries}
        onSubmit={this.onSubmit}
      />
    );
  }
}
