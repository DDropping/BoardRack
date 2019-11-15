import React from 'react';
import { Icon, Button } from 'antd';

const Filter = ({ isFiltersVisible, setIsFiltersVisible }) => {
  return (
    <div style={{ display: 'inline-block' }}>
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
