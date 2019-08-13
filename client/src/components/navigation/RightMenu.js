import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

class RightMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="login">
          <Link to="/">Login</Link>
        </Menu.Item>
        <Menu.Item key="register">
          <Link to="/">Register</Link>
        </Menu.Item>
      </Menu>
    );
  }
}
export default RightMenu;
