import React from 'react';
import { Icon, Button } from 'antd';

const LayoutButton = () => {
  return (
    <Button
      onClick={console.log('hello')}
      style={{ marginRight: '5px', float: 'right' }}
      type="primary"
      ghost
    >
      <Icon type="appstore" />
      View
    </Button>
  );
};

export default LayoutButton;
