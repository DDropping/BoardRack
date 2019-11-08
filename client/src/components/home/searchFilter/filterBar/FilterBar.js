import React from 'react';

import './filterBar.css';
import FilterButton from './filterButton/FilterButton';
import LayoutButton from './layout/LayoutButton';

const FilterBar = () => {
  return (
    <div className="br-filter-bar-wrapper">
      <FilterButton />
      <LayoutButton />
    </div>
  );
};

export default FilterBar;
