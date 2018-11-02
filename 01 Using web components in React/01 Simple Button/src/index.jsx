import React from 'react';
import ReactDOM from 'react-dom';

const HelloComponent = () => (
  <div>
    <h1>Hello from React</h1>
    <twitter-button type="follow" width="200" height="30" user="user" />
  </div>
);

ReactDOM.render(<HelloComponent />, document.getElementById('root'));
