import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

//const { SubMenu } = Menu;

class NavBar extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="boardrack">BoardRack</Menu.Item>
        <Menu.Item key="mail">
          <Icon type="mail" />
          Navigation One
        </Menu.Item>
      </Menu>
    );
  }
}

export default NavBar;
