import React from 'react';
import './Search.css';

const SearchBar = () => {
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const searchText = event.target.querySelector('input[type="text"]').value.trim();

    console.log("검색어: ", searchText);
  };

  return (
    <div className="search-cover">
      <form className="search-form" method="get" action="" onSubmit={handleSearchSubmit}>
        <div className="search-input-container">
          <div className="search-td">
            <input type="text" placeholder="Search" required onInvalid={(e) => e.preventDefault()} />
          </div>
          <div className="search-td search-s-cover">
            <button className="search-button" type="submit">
              <div className="search-s-circle"></div>
              <span></span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
