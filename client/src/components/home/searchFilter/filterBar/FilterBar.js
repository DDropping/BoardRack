import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Tag } from 'antd';

import './filterBar.css';
import FilterButton from './filterButton/FilterButton';
import LayoutButton from './layout/LayoutButton';
import {
  UPDATE_BOARD_TYPE,
  DELETE_PRICE,
  UPDATE_CONDITION
} from '../../../../actions/types';

const FilterBar = ({ isFiltersVisible, setIsFiltersVisible }) => {
  const dispatch = useDispatch();
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
          {!anyPrice && priceHigh && priceLow && priceHigh >= priceLow ? (
            <Tag
              className="br-flex-item"
              color="blue"
              closable
              onClose={() => dispatch({ type: DELETE_PRICE })}
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
                  onClose={() =>
                    dispatch({
                      type: UPDATE_BOARD_TYPE,
                      payload: boardType.filter(type => type !== board)
                    })
                  }
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
                  onClose={() =>
                    dispatch({
                      type: UPDATE_CONDITION,
                      payload: condition.filter(item => item !== cond)
                    })
                  }
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
