import React, { Component } from 'react';
import styles from './form.css';

export class Form extends Component {
  nameRef = React.createRef();
  countryIdRef = React.createRef();
  submitRef = React.createRef();

  componentDidMount() {
    this.nameRef.current.addEventListener('input', this.onChangeNameHandler);
    this.countryIdRef.current.addEventListener(
      'selected',
      this.onChangeCountryIdHandler
    );
    this.submitRef.current.addEventListener('click', this.props.onSubmit);
  }

  onChangeNameHandler = e => {
    const value = e.target.value;
    this.props.onFieldChange('name', value);
  };

  onChangeCountryIdHandler = e => {
    const value = e.target.value.value;
    this.props.onFieldChange('countryId', value);
  };

  render() {
    return (
      <form className={styles.form}>
        <wired-input
          class={styles.input}
          ref={this.nameRef}
          placeholder="Name"
          value={this.props.user.name}
        />
        <wired-combo
          class={styles.select}
          ref={this.countryIdRef}
          selected={this.props.user.countryId}
        >
          {this.props.countries.map(country => (
            <wired-item
              key={country.id}
              value={country.id}
              text={country.name}
            />
          ))}
        </wired-combo>

        <wired-button
          class={styles.button}
          ref={this.submitRef}
          disabled={true}
        >
          Submit
        </wired-button>
      </form>
    );
  }
}
