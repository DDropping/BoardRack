import React from 'react';

import './filterBox.css';
import PriceRange from '../filterItems/PriceRange';
import BoardType from '../filterItems/BoardType';

const FilterButton = () => {
  return (
    <div className="br-filterBox-container ">
      <PriceRange />
      <BoardType />
    </div>
  );
};

export default FilterButton;
