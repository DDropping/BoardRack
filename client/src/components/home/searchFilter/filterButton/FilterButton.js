import React from 'react';
import { Icon, Button } from 'antd';

const Filter = () => {
  return (
    <div className="br-filterBar-container">
      <div className="br-filterButton-container">
        <Button
          onClick={console.log('hello')}
          style={{ marginRight: '5px' }}
          type="primary"
          ghost
        >
          <Icon type="filter" />
          Filter
        </Button>
      </div>
      <div className="br-viewButton-container">
        <Button
          onClick={console.log('hello')}
          style={{ marginRight: '5px' }}
          type="primary"
          ghost
        >
          <Icon type="appstore" />
          View
        </Button>
      </div>
    </div>
  );
};

export default Filter;
