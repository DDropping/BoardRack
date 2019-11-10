import React from 'react';

import './filterBox.css';
import PriceRange from '../filterItems/PriceRange';
import BoardType from '../filterItems/BoardType';
import Condition from '../filterItems/Condition';
import Distance from '../filterItems/Distance';

const FilterButton = () => {
  return (
    <div className="br-filterBox-container ">
      <PriceRange />
      <br />
      <Condition />
      <br />
      <BoardType />
      <br />
      <Distance />
    </div>
  );
};

export default FilterButton;
