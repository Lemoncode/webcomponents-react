# Web components

Web components are a set of web platform APIs that allow you to create new custom HTML tags to use in web pages and web apps whatever it's the Javascript framework, library or Vanilla JS you use for your apps.

But, is it possible to use Web Components in React or React to create Web components?

According to [React documentation](https://reactjs.org/docs/web-components.html): "React and Web Components are built to solve different problems... As a developer, you are free to use React in your Web Components, or to use Web Components in React or both"

We could start to play with some simple examples to know limitations about that.

# Conclusions

When we are working with `web components` (naming too `custom-elements`) we have to think about two different ways:

- Create web component
- Use web component

That means, we could create a web component with one technology and consume it with other different thechnology (as we did on samples _03 Using web components in Preact_).

### Create WC with React

Right now, it exists several `tools / libraries` to `create` web components:

- [Todo-list app](https://wc-todo.firebaseapp.com/): show a todo-list app implemented with different tools.
- And the [syntax differences](https://github.com/shprink/web-components-todo#-syntax-differences)

If we want use React for that purpose:

- Official React support: there is a [RFC: Plan for custom elements in React 17](https://github.com/facebook/react/issues/11347) with some proposals like below but it isn't confirmed yet.

  ```javascript
    const XFoo = ReactDOM.createCustomElementType({
      element: ‘x-foo’,
      ‘my-attr’: // something that tells React what to do with it
      someRichDataProp: // something that tells React what to do with it
    });
  ```

- [Skatejs + React](https://skatejs.netlify.com/renderers/with-react): you could implement your components with React and then use a `wrapper` to expose web components props, etc. `Skatejs` has other renders like `Preact` or `LitHTML`.

- [Reactive elements](https://github.com/PixelsCommander/ReactiveElements): `0.10.0v`. Similar lib with `wrapper` over React component but with some special properties like `reactive-elements-no-boolean-transform`.

- [React-web-component](https://github.com/spring-media/react-web-component): `1.3.0v`. It has the `wrapper` and the possibility to use [WC lifecycle](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#Using_the_lifecycle_callbacks) methods inside React components.

### Use WC on React

In previous examples, we saw that React supports only primitive data pass down through properties that means we can not pass objects, arrays or callbacks. We have even noted that handling events with React and WC could be cumbersome due to we have to use a workaround to listen events like we saw on _02 Simple Form_ example:

```javascript
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
      ...
    );
  }
}
```

If we using Preact, we can pass rich data like objects or arrays. Also, we can handle events in a declarative way like:

```javascript
<my-component
  oncustomevent={this.handleCustomEvent}
  oncustom-event={this.handleCustomEvent}
/>
```

But it doesn't support `camelCase` syntax: [Preact support tests](https://custom-elements-everywhere.com/libraries/preact/results/results.html)

# Web Components React Roadmap

- [RFC: Plan for custom elements in React 17](https://github.com/facebook/react/issues/11347) opened on 24 Oct 2017. Not closed yet.

## Resources

- [Webcomponents.org](https://www.webcomponents.org)

- [React / Web components](https://reactjs.org/docs/web-components.html)

- [Can I use web components?](https://caniuse.com/#search=web%20components)

- [Web components polyfills](https://github.com/webcomponents/webcomponentsjs)

- [custom-elements-everywhere](https://custom-elements-everywhere.com/)

```

```
