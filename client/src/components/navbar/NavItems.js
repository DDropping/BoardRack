import React from 'react';
import { connect } from 'react-redux';
import { Menu } from 'antd';
import { toggleRegisterModal } from '../../actions/registerModal';
import { toggleLoginModal } from '../../actions/loginModal';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';

const Navbar = props => {
  return (
    <div>
      <Menu className="navItemsInside" mode="horizontal">
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item onClick={props.toggleLoginModal} key="login">
          Login
        </Menu.Item>
        <Menu.Item onClick={props.toggleRegisterModal} key="register">
          Register
        </Menu.Item>
      </Menu>
      <RegisterModal />
      <LoginModal />
    </div>
  );
};

export default connect(
  null,
  { toggleRegisterModal, toggleLoginModal }
)(Navbar);
