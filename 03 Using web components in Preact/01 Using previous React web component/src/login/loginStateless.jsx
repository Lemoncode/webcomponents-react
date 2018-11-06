import React from 'react';
import styles from './loginStateless.css';

export const LoginStateless = props => (
  <form className={styles.login}>
    <input
      type="text"
      value={props.user.name}
      name="name"
      placeholder="Name"
      onChange={changeHandler(props)}
    />
    <input
      type="password"
      value={props.user.password}
      name="password"
      placeholder="Password"
      onChange={changeHandler(props)}
    />
    <button type="button" onClick={props.onLogin}>
      Login
    </button>
  </form>
);

const changeHandler = props => event => {
  const fieldName = event.target.name;
  const value = event.target.value;
  props.onFieldChange(fieldName, value);
};
