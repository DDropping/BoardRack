import React, { Fragment, useState } from 'react';
import { Button } from 'antd';

import './filterBox.css';
import LocationText from './LocationText';
import PriceRange from '../filterItems/PriceRange';
import BoardType from '../filterItems/BoardType';
import Condition from '../filterItems/Condition';
import Distance from '../filterItems/Distance';
import MoreFiltersButton from '../filterItems/MoreFiltersButton';

const FilterButton = ({ isFiltersVisible, setIsFiltersVisible }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      {isFiltersVisible ? (
        <Fragment>
          <div className="br-filterBox-container">
            <LocationText />
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
        </Fragment>
      ) : null}
    </Fragment>
  );
};

export default FilterButton;
