import React from 'react';
import { Menu, Icon } from 'antd';

const Navbar = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home">Home</Menu.Item>
      <Menu.Item key="login">Login</Menu.Item>
      <Menu.Item key="register">Register</Menu.Item>
    </Menu>
  );
};

export default Navbar;
