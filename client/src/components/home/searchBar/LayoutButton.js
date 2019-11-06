import React from 'react';
import { Icon, Button } from 'antd';

const LayoutButton = () => {
  return (
    <Button
      onClick={() => console.log('hello')}
      style={{ float: 'right' }}
      type="link"
    >
      <Icon type="appstore" />
      View
    </Button>
  );
};

export default LayoutButton;
