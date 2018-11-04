# 00 Native web components

In this sample we are going to create a Web component using native API and React.

# Steps

- Copy `package.json` from _03 Styling web component_:

- Replace `start` by `build` command:

_./package.json_

```diff
- "name": "00-boilerplate",
+ "name": "my-web-component",
...
- "main": "index.js",
+ "main": "dist/index.js",
"scripts": {
-   "start": "rimraf dist && parcel ./src/index.html --open"
+   "build": "rimraf dist && parcel build ./src/index.js"
  },
```

- Create simple web component:

_./src/index.js_

```javascript
const template = document.createElement('template');

template.innerHTML = `
<h1>Hello from web components</h1>
`;

class HelloComponent extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('hello-component', HelloComponent);
```

- Build component:

```bash
npm run build
```

- Let's add a `playground` folder to render the `web component`. We are going to copy _03 Styling web component_ to `playground` folder (Remove `app`, and `form` files).

- Add reference to `playground` project:

_./playground/package.json_

```diff
...
  "dependencies": {
    "@webcomponents/webcomponentsjs": "^2.1.3",
    "react": "^16.6.0",
-   "react-dom": "^16.6.0"
+   "react-dom": "^16.6.0",
+   "my-web-component": "file:../"
  },
...
```

- Update `vendor` file:

_./playground/src/vendor.js_

```diff
import('react');
import('react-dom');
import('@webcomponents/webcomponentsjs');
+ import('my-web-component');
```

- And `index` file:

_./playground/src/index.jsx_

```diff
import React from 'react';
import ReactDOM from 'react-dom';
import '@webcomponents/webcomponentsjs';
- import 'wired-elements';
- import { App } from './app';
+ import 'my-web-component'

- ReactDOM.render(<App />, document.getElementById('root'));
+ ReactDOM.render(<hello-component />, document.getElementById('root'));
```

- Run sample:

```bash
cd playground
npm i
npm start
```

- Let's try to use React and JSX (rename to jsx):

_./src/index.jsx_

```diff
+ import React from 'react';
+ import ReactDOM from 'react-dom';

- const template = document.createElement('template');
+ const root = document.createElement('span');

- template.innerHTML = `
- <h1>Hello from web components</h1>
- `;

class HelloComponent extends HTMLElement {
  constructor() {
    super();

-   const shadowRoot = this.attachShadow({ mode: 'open' });
-   shadowRoot.appendChild(template.content.cloneNode(true));
+   this.attachShadow({ mode: 'open' }).appendChild(root);
+   ReactDOM.render(<h1>Hello from web component and React</h1>, root);
  }
}

customElements.define('hello-component', HelloComponent);
```

- Update `package.json`:

_./package.json_

```diff
...
  "scripts": {
-   "build": "rimraf dist && parcel build ./src/index.js"
+   "build": "rimraf dist && parcel build ./src/index.jsx"
  },
...
```

- Run again:

```bash
npm run build

cd playground
npm start
```

- Update `build` command to update playground dependency:

_./package.json_

```diff
  "scripts": {
-   "build": "rimraf dist && parcel build ./src/index.jsx"
+   "build": "rimraf dist && parcel build ./src/index.jsx && npm run install:playground",
+   "install:playground": "cd playground && npm i"
  },
```
