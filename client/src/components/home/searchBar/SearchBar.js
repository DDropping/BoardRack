import React from 'react';

import './searchBar.css';
import FilterButton from '../searchFilter/filterButton/FilterButton';

const SearchBar = () => {
  return (
    <div className="br-search-bar-wrapper">
      <div className="br-search-bar-container ">
        Search Bar
        <FilterButton />
      </div>
    </div>
  );
};

export default SearchBar;
