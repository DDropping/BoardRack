import React from 'react';

import './filterBox.css';
import PriceRange from '../filterItems/PriceRange';

const FilterButton = () => {
  return (
    <div className="br-filterBox-container ">
      <PriceRange />
    </div>
  );
};

export default FilterButton;
