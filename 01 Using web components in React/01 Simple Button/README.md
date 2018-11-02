# 01 Simple Button

In this sample we are going to use a [social-button](https://www.webcomponents.org/element/1000ch/social-button) web component in React

# Steps

- Copy files from previous sample.

- Install dependencies:

```bash
npm i
```

- Install `rimraf` to clean `dist` folder:

```bash
npm i rimraf -D
```

_./package.json_

```diff
{
  ...
  "scripts": {
-   "start": "parcel ./src/index.html --open"
+   "start": "rimraf dist && parcel ./src/index.html --open"
  },
  ...
}
```

- If we check [web components browser compatibility](https://caniuse.com/#search=web%20components) we could see that we need some polyfills to work with it nowadays. So we need to install [web components polyfills](https://github.com/WebComponents/webcomponentsjs)

```bash
npm i @webcomponents/webcomponentsjs -P
```

- In order to split vendor dependencies from app, let's add `vendor` file:

_./src/vendor.js_

```javascript
import('react');
import('react-dom');
import('@webcomponents/webcomponentsjs');

```

- Add previous file to html:

_./src/index.html_

```diff
...
+ <script src="./vendor.js"></script>
<script src="./index.jsx"></script>

</html>
```

- Install [`social-button`](https://www.webcomponents.org/element/1000ch/social-button) web component from official web components site:

```bash
npm i social-button -P
```

- Add it to `vendor` file:

_./src/vendor.js_

```diff
import('react');
import('react-dom');
import('@webcomponents/webcomponentsjs');
+ import('social-button');

```

- Let's use it:

_./src/index.js_

```diff
import React from 'react';
import ReactDOM from 'react-dom';

- const HelloComponent = () => <h1>Hello from React</h1>;
+ const HelloComponent = () => (
+   <div>
+     <h1>Hello from React</h1>
+     <twitter-button type="follow" width="200" height="30" user="user" />
+   </div>
+ );

ReactDOM.render(<HelloComponent />, document.getElementById('root'));

```