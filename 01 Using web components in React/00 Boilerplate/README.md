# 00 Boilerplate

Add boilerplate to create a React app.

# Steps

- Initialize `package.json`:

```bash
npm init
```

- Install `react` and `react-dom`:

```
npm i react react-dom -P
```

- Let's install a bundler tool to package our app, for example [parcel](https://github.com/parcel-bundler/parcel):

```
npm i parcel-bundler -D
```

- Let's create the React entry point:

_./src/index.jsx_

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

const HelloComponent = () => <h1>Hello from React</h1>;

ReactDOM.render(<HelloComponent />, document.getElementById('root'));

```

- Now let's create the `index.html` file:

_./src/index.html_

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Web components / React</title>
</head>

<body>
  <div id="root"></div>
</body>
<script src="./index.jsx"></script>

</html>
```

- Finally, add scripts to run our app:

_./package.json_

```diff
{
...
  "scripts": {
-   "test": "echo \"Error: no test specified\" && exit 1"
+   "start": "parcel ./src/index.html --open"
  },
...
}

```

- Run app:

```bash
npm start
```