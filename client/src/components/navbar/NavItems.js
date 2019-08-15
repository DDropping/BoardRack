import React from 'react';
import { connect } from 'react-redux';
import { Menu } from 'antd';
import { toggleRegisterModal } from '../../actions/registerModal';
import RegisterModal from './RegisterModal';

const Navbar = props => {
  return (
    <div>
      <Menu className="navItemsInside" mode="horizontal">
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item onClick={props.toggleRegisterModal} key="login">
          Login
        </Menu.Item>
        <Menu.Item onClick={props.toggleRegisterModal} key="register">
          Register
        </Menu.Item>
      </Menu>
      <RegisterModal />
    </div>
  );
};

export default connect(
  null,
  { toggleRegisterModal }
)(Navbar);
