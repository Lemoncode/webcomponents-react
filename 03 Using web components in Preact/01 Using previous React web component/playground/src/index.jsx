import { h, render } from 'preact';
import '@webcomponents/webcomponentsjs';
import 'my-web-component';

const user = {
  name: 'test',
  password: 'pass',
};

render(<login-component user={user} />, document.getElementById('root'));
