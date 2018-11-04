import React from 'react';
import ReactDOM from 'react-dom';

const root = document.createElement('span');

class HelloComponent extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' }).appendChild(root);
    ReactDOM.render(<h1>Hello from web component and React</h1>, root);
  }
}

customElements.define('hello-component', HelloComponent);
