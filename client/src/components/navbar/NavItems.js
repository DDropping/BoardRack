import React from 'react';
import { connect } from 'react-redux';
import { Menu } from 'antd';
import { toggleRegisterModal } from '../../actions/modal';

const Navbar = props => {
  return (
    <Menu className="navItemsInside" mode="horizontal">
      <Menu.Item key="home">Home</Menu.Item>
      <Menu.Item onClick={props.toggleRegisterModal} key="login">
        Login
      </Menu.Item>
      <Menu.Item onClick={props.toggleRegisterModal} key="register">
        Register
      </Menu.Item>
    </Menu>
  );
};

export default connect(
  null,
  { toggleRegisterModal }
)(Navbar);
