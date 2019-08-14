import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

class RightMenuDrawer extends Component {
  render() {
    return (
      <Menu>
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
export default RightMenuDrawer;
