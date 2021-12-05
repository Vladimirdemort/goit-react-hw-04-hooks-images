
import React, { useState } from 'react';

import s from './SearchBar.module.css';
import PropTypes from 'prop-types';

function Searchbar ({onSubmit}) {

  const [imageName, setImageName] = useState('')
  
  const handleChange = e => {
   setImageName(e.currentTarget.value)
  };

 const handleSubmit = event => {
    event.preventDefault();
    if (imageName.trim() === '') {
      return;
    }

    onSubmit(imageName);
    setImageName('')
  };

 
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={imageName}
            onChange={handleChange}
          />
        </form>
      </header>
    );
  
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
