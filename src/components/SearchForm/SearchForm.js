import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './SearchForm.module.css';

export default class SearchForm extends Component {
  state = {
    input: '',
  };

  handleInput = e => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = e => {
    const { onSubmit } = this.props;
    const { input } = this.state;

    e.preventDefault();
    onSubmit(input);
  };

  render() {
    const { input } = this.state;
    return (
      <form className={styles.searchForm} onSubmit={this.handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Search images..."
          value={input}
          onChange={this.handleInput}
        />
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
