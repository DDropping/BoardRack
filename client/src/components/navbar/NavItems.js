import React from 'react';
import { connect } from 'react-redux';
import { Menu } from 'antd';
import { toggleRegisterModal } from '../../actions/registerModal';
import { toggleLoginModal } from '../../actions/loginModal';
import RegisterModal from './register/RegisterModal';
import LoginModal from './login/LoginModal';

const Navbar = props => {
  return (
    <div>
      <Menu className="navItemsInside" mode="horizontal">
        <Menu.Item key="home">Home</Menu.Item>
        {props.isAuthenticated && <Menu.Item key="createPost">Post</Menu.Item>}
        {props.isAuthenticated && <Menu.Item key="account">Account</Menu.Item>}
        {!props.isAuthenticated && (
          <Menu.Item onClick={props.toggleLoginModal} key="login">
            Login
          </Menu.Item>
        )}
        {!props.isAuthenticated && (
          <Menu.Item onClick={props.toggleRegisterModal} key="register">
            Register
          </Menu.Item>
        )}
      </Menu>

      <RegisterModal />
      <LoginModal />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  { toggleRegisterModal, toggleLoginModal }
)(Navbar);
