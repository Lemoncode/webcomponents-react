# 02 Simple Form

In this sample we are going to implement simple form using [wired-elements](https://www.webcomponents.org/element/wired-elements) web components.

# Steps

- Copy files from previous sample.

- Install dependencies:

```bash
npm i
```

- Let's start to define the form model:

_./src/model.js_

```js
export const createEmptyUser = () => ({
  name: '',
  countryId: '',
});
```

- Now, we could implement the `form` UI. We could start with the `name` field:

_./src/form.jsx_

```javascript
import React, { Component } from 'react';

export class Form extends Component {
  nameRef = React.createRef();

  componentDidMount() {
    this.nameRef.current.addEventListener('input', this.onChangeNameHandler);
  }

  onChangeNameHandler = e => {
    const value = e.target.value;
    this.props.onFieldChange('name', value);
  };

  render() {
    return (
      <form>
        <wired-input
          ref={this.nameRef}
          placeholder="Name"
          value={this.props.user.name}
        />
      </form>
    );
  }
}
```

> IMPORTANT: Because React implements its own synthetic event system, it cannot listen for DOM events coming from Custom Elements without the use of a workaround.
>
> That's why we have to create `input` event listener

- We are going to define all app state in `App` component:

_./src/app.jsx_

```javascript
import React, { Component } from 'react';
import { createEmptyUser } from './model';
import { Form } from './form';

export class App extends Component {
  state = {
    user: createEmptyUser(),
  };

  onFieldChange = (fieldName, value) => {
    this.setState({
      user: {
        ...this.state.user,
        [fieldName]: value,
      },
    });
  };

  render() {
    return <Form user={this.state.user} onFieldChange={this.onFieldChange} />;
  }
}
```

- Update `index.jsx`:

_./src/index.jsx_

```diff
import React from 'react';
import ReactDOM from 'react-dom';
import '@webcomponents/webcomponentsjs';
import 'wired-elements';
+ import { App } from './app';

- const HelloComponent = () => (
-   <div>
-     <h1>Hello from React</h1>
-     <wired-button elevation={2}>Submit</wired-button>
-     <wired-button disabled={true}>Cancel</wired-button>
-   </div>
- );

- ReactDOM.render(<HelloComponent />, document.getElementById('root'));
+ ReactDOM.render(<App />, document.getElementById('root'));
```

- We need to install `babel` to be able to works with ES6 and beyond syntax:

```bash
npm i @babel/cli @babel/core @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties -D
```

- Add `.babelrc`:

_./.babelrc_

```json
{
  "presets": [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry"
      }
    ]
  ],
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

- Let's continue with countries:

_./src/app.jsx_

```diff
...

export class App extends Component {
  state = {
    user: createEmptyUser(),
+   countries: [
+     { id: '1', name: 'Spain' },
+     { id: '2', name: 'France' },
+     { id: '3', name: 'United Kingdom' },
+   ],
  };

...

  render() {
-   return <Form user={this.state.user} onFieldChange={this.onFieldChange} />;
+   return (
+     <Form
+       user={this.state.user}
+       onFieldChange={this.onFieldChange}
+       countries={this.state.countries}
+     />
+   );
  }
}
```

- Add country `select` component:

_./src/form.jsx_

```diff
import React, { Component } from 'react';

export class Form extends Component {
  nameRef = React.createRef();
+ countryIdRef = React.createRef();

  componentDidMount() {
    this.nameRef.current.addEventListener('input', this.onChangeNameHandler);
+   this.countryIdRef.current.addEventListener(
+     'selected',
+     this.onChangeCountryIdHandler
+   );
  }

  onChangeNameHandler = e => {
    const value = e.target.value;
    this.props.onFieldChange('name', value);
  };

+ onChangeCountryIdHandler = e => {
+   const value = e.target.value.value;
+   this.props.onFieldChange('countryId', value);
+ };

  render() {
    return (
      <form>
        <wired-input
          ref={this.nameRef}
          placeholder="Name"
          value={this.props.user.name}
        />
+       <wired-combo
+         ref={this.countryIdRef}
+         selected={this.props.user.countryId}
+       >
+         {this.props.countries.map(country => (
+           <wired-item
+             key={country.id}
+             value={country.id}
+             text={country.name}
+           />
+         ))}
+       </wired-combo>
      </form>
    );
  }
}
```

> NOTE: Pay attention on line 21: e.target.`value.value`;

- Finally add the `sumbit` button:

_./src/app.jsx_

```diff
...

+ onSubmit = () => {
+   alert(JSON.stringify(this.state.user));
+ }

  render() {
    return (
      <Form
        user={this.state.user}
        onFieldChange={this.onFieldChange}
        countries={this.state.countries}
+       onSubmit={this.onSubmit}
      />
    );
  }
}
```

_./src/form.jsx_

```diff
import React, { Component } from 'react';

export class Form extends Component {
  nameRef = React.createRef();
  countryIdRef = React.createRef();
+ submitRef = React.createRef();

  componentDidMount() {
    this.nameRef.current.addEventListener('input', this.onChangeNameHandler);
    this.countryIdRef.current.addEventListener(
      'selected',
      this.onChangeCountryIdHandler
    );
+   this.submitRef.current.addEventListener('click', this.props.onSubmit);
  }

...

  render() {
    return (
      <form>
...
        </wired-combo>
+       <wired-button ref={this.submitRef}>Submit</wired-button>
      </form>
    );
  }
}
```
