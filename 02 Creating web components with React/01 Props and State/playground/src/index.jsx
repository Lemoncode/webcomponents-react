import React from 'react';
import ReactDOM from 'react-dom';
import '@webcomponents/webcomponentsjs';
import 'my-web-component';

const user = {
  name: 'test',
  password: 'pass',
};

ReactDOM.render(
  <login-component user={user} />,
  document.getElementById('root')
);
