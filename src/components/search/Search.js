// SearchBar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css';

const SearchBar = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const searchText = event.target.querySelector('input[type="text"]').value.trim();

    console.log("검색어: ", searchText);
    navigate("/login", { state: { searchText } });
  };

  return (
    <div className="search-cover">
      <form className="search-form" method="get" action="" onSubmit={handleSearchSubmit}>
        <div className="search-input-container">
          <div className="search-td">
            <input type="text" placeholder="search" required onInvalid={(e) => e.preventDefault()} style={{ outline: "none", border: "none" }} />
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
};

export default SearchBar;
