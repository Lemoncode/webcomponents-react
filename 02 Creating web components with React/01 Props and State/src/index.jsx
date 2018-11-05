import React from 'react';
import ReactDOM from 'react-dom';
import { Login } from './login';

const root = document.createElement('span');

class LoginComponent extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(root);
    ReactDOM.render(<Login user={this.user} />, root);
  }

  set user(value) {
    this.setAttribute('user', JSON.stringify(value));
  }

  get user() {
    const value = this.getAttributeNode('user').nodeValue;
    console.log('VALUE: ', JSON.stringify(value));
    return JSON.parse(value);
  }
}

customElements.define('login-component', LoginComponent);
