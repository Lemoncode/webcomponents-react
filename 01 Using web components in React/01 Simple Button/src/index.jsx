import React from 'react';
import ReactDOM from 'react-dom';
import '@webcomponents/webcomponentsjs';
import 'wired-elements';

const HelloComponent = () => (
  <div>
    <h1>Hello from React</h1>
    <wired-button elevation={2}>Submit</wired-button>
    <wired-button disabled={true}>Cancel</wired-button>
  </div>
);

ReactDOM.render(<HelloComponent />, document.getElementById('root'));
