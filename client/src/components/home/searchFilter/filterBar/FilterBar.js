import React from 'react';

import './filterBar.css';
import FilterButton from './filterButton/FilterButton';
import LayoutButton from './layout/LayoutButton';

const FilterBar = ({ isFiltersVisible, setIsFiltersVisible }) => {
  return (
    <div className="br-filter-bar-wrapper">
      <FilterButton
        isFiltersVisible={isFiltersVisible}
        setIsFiltersVisible={setIsFiltersVisible}
      />
      <LayoutButton />
    </div>
  );
};

export default FilterBar;
