import React from 'react';
import { Icon, Button } from 'antd';

import './filterButton.css';

const Filter = ({ isFiltersVisible, setIsFiltersVisible }) => {
  return (
    <div className="br-filter-button">
      {isFiltersVisible ? (
        <Button onClick={() => setIsFiltersVisible(false)} type="link">
          <Icon type="filter" />
          Hide Filters
        </Button>
      ) : (
        <Button onClick={() => setIsFiltersVisible(true)} type="link">
          <Icon type="filter" />
          Show Filters
        </Button>
      )}
    </div>
  );
};

export default Filter;
