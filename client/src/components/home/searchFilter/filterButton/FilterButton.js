import React from 'react';
import { Icon, Button } from 'antd';

const Filter = () => {
  return (
    <Button onClick={() => console.log('hello')} type="link">
      <Icon type="filter" />
      Filter
    </Button>
  );
};

export default Filter;
