import React from 'react';
import { Tag } from 'antd';

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
      <Tag color="blue" closable onClose={() => console.log('close tag')}>
        red
      </Tag>
      <LayoutButton />
    </div>
  );
};

export default FilterBar;
