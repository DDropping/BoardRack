import React, { useState } from 'react';
import { Icon, Button } from 'antd';

const Filter = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  return (
    <div style={{ display: 'inline-block' }}>
      {isFilterVisible ? (
        <Button onClick={() => setIsFilterVisible(false)} type="link">
          <Icon type="filter" />
          Hide Filters
        </Button>
      ) : (
        <Button onClick={() => setIsFilterVisible(true)} type="link">
          <Icon type="filter" />
          Show Filters
        </Button>
      )}
    </div>
  );
};

export default Filter;
