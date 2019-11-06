import React from 'react';

import './searchBar.css';
import SearchInput from './SearchInput';
import LayoutButton from './LayoutButton';
import FilterButton from '../searchFilter/filterButton/FilterButton';

const SearchBar = () => {
  return (
    <div className="br-search-bar-wrapper">
      <div className="br-search-bar-container ">
        <SearchInput />
        <div>
          <FilterButton />
          <LayoutButton />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
