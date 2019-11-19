import React from 'react';
import { useSelector } from 'react-redux';
import { Tag } from 'antd';

import './filterBar.css';
import FilterButton from './filterButton/FilterButton';
import LayoutButton from './layout/LayoutButton';

const FilterBar = ({ isFiltersVisible, setIsFiltersVisible }) => {
  const anyPrice = useSelector(state => state.filters.anyPrice);
  const priceLow = useSelector(state => state.filters.priceLow);
  const priceHigh = useSelector(state => state.filters.priceHigh);
  const boardType = useSelector(state => state.filters.boardType);
  const condition = useSelector(state => state.filters.condition);

  return (
    <div className="br-filter-bar-wrapper">
      <FilterButton
        isFiltersVisible={isFiltersVisible}
        setIsFiltersVisible={setIsFiltersVisible}
      />
      <div className="br-filter-item-container">
        <div className="br-flex-container">
          {!anyPrice ? (
            <Tag
              className="br-flex-item"
              color="blue"
              closable
              onClose={() => console.log('close tag')}
            >
              ${priceLow}-${priceHigh}
            </Tag>
          ) : null}

          {boardType.length < 8
            ? boardType.map(board => (
                <Tag
                  key={board}
                  className="br-flex-item"
                  color="blue"
                  closable
                  onClose={() => console.log('close tag')}
                >
                  {board}
                </Tag>
              ))
            : null}

          {condition.length < 5
            ? condition.map(cond => (
                <Tag
                  key={cond}
                  className="br-flex-item"
                  color="blue"
                  closable
                  onClose={() => console.log('close tag')}
                >
                  {cond}
                </Tag>
              ))
            : null}
        </div>
      </div>
      <LayoutButton />
    </div>
  );
};

export default FilterBar;
