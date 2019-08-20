import React from 'react';
import { Drawer } from 'antd';

const NavItemsDrawer = () => {
  return (
    <div>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        //onClose={}
        visible={true}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

export default NavItemsDrawer;
