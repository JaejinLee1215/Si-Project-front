import React, { useState } from 'react';

const SearchForm = ({ handleSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    handleSearch(searchValue.trim());
  };

  return (
    <form onSubmit={handleSubmitSearch}>
      <div>
        <label htmlFor="search">이름으로 검색:</label>
        <input
          type="text"
          id="search"
          name="search"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="이름으로 검색"
        />
        <button type="submit">검색</button>
      </div>
    </form>
  );
};

export default SearchForm;
