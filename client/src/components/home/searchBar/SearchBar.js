import React from 'react';

import './searchBar.css';
import LayoutButton from './LayoutButton';
import FilterButton from '../searchFilter/filterButton/FilterButton';

const SearchBar = () => {
  return (
    <div className="br-search-bar-wrapper">
      <FilterButton />
      <LayoutButton />
    </div>
  );
};

export default SearchBar;
