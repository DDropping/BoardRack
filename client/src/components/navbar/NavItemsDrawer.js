import React from 'react';
import { connect } from 'react-redux';
import { Menu, Icon, Drawer } from 'antd';

import { toggleNavDrawer } from '../../actions/drawer_nav';
import { toggleRegisterModal } from '../../actions/registerModal';
import { toggleLoginModal } from '../../actions/loginModal';
import RegisterModal from './register/RegisterModal';
import LoginModal from './login/LoginModal';

const NavItemsDrawer = props => {
  return (
    <div>
      <Drawer
        placement="right"
        closable={false}
        onClose={props.toggleNavDrawer}
        visible={props.isVisible}
        style={{ padding: '0px !important' }}
      >
        <Menu>
          <Menu.Item key="home">
            <Icon type="home" style={{ color: 'rgba(0,0,0,.50)' }} />
            Home
          </Menu.Item>
          {props.isAuthenticated && (
            <Menu.Item key="createPost">
              <Icon type="plus-circle" style={{ color: 'rgba(0,0,0,.50)' }} />
              Create Post
            </Menu.Item>
          )}
          {props.isAuthenticated && (
            <Menu.Item key="myAccount">
              <Icon type="user" style={{ color: 'rgba(0,0,0,.50)' }} />
              My Account
            </Menu.Item>
          )}
          {props.isAuthenticated && (
            <Menu.Item key="myPosts">
              <Icon type="form" style={{ color: 'rgba(0,0,0,.50)' }} />
              My Posts
            </Menu.Item>
          )}
          {props.isAuthenticated && (
            <Menu.Item key="myMessages">
              <Icon type="mail" style={{ color: 'rgba(0,0,0,.50)' }} />
              My Messages
            </Menu.Item>
          )}
          {props.isAuthenticated && (
            <Menu.Item key="myFavorites">
              <Icon type="star" style={{ color: 'rgba(0,0,0,.50)' }} />
              My Favorites
            </Menu.Item>
          )}
          {!props.isAuthenticated && (
            <Menu.Item onClick={props.toggleLoginModal} key="login">
              <Icon type="user" style={{ color: 'rgba(0,0,0,.50)' }} />
              Login
            </Menu.Item>
          )}
          {!props.isAuthenticated && (
            <Menu.Item onClick={props.toggleRegisterModal} key="register">
              <Icon type="user-add" style={{ color: 'rgba(0,0,0,.50)' }} />
              Register
            </Menu.Item>
          )}
          {props.isAuthenticated && <Menu.Divider />}
          {props.isAuthenticated && (
            <Menu.Item key="logout">
              <Icon type="logout" style={{ color: 'rgba(0,0,0,.50)' }} />
              Logout
            </Menu.Item>
          )}
        </Menu>
      </Drawer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isVisible: state.navDrawer.isVisible,
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  { toggleRegisterModal, toggleLoginModal, toggleNavDrawer }
)(NavItemsDrawer);
