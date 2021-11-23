import React from 'react';
import s from './SearchBar.module.css';
import PropTypes from 'prop-types';

class Searchbar extends React.Component {
  state = {
    imageName: '',
  };

  handleChange = e => {
    this.setState({
      imageName: e.currentTarget.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.imageName.trim() === '') {
      return;
    }

    this.props.onSubmit(this.state.imageName);
    this.setState({
      imageName: '',
    });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.imageName}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
