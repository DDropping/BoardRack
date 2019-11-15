import React, { useState } from 'react';

import './filterBox.css';
import PriceRange from '../filterItems/PriceRange';
import BoardType from '../filterItems/BoardType';
import Condition from '../filterItems/Condition';
import Distance from '../filterItems/Distance';
import MoreFiltersButton from '../filterItems/MoreFiltersButton';

const FilterButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="br-filterBox-container ">
      <PriceRange />
      <br />
      <Condition />
      <br />
      <BoardType />
      <br />
      <Distance />
      <br />
      <MoreFiltersButton isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default FilterButton;
