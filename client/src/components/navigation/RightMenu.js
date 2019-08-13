import React, { Component } from 'react';
import { Menu } from 'antd';
class RightMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <a href="/">Home</a>
        </Menu.Item>
        <Menu.Item key="login">
          <a href="/">Login</a>
        </Menu.Item>
        <Menu.Item key="register">
          <a href="/">Register</a>
        </Menu.Item>
      </Menu>
    );
  }
}
export default RightMenu;
