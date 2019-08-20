import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu, Icon, Drawer } from 'antd';

import { toggleNavDrawer } from '../../actions/drawer_nav';
import { toggleRegisterModal } from '../../actions/registerModal';
import { toggleLoginModal } from '../../actions/loginModal';
import {
  toggleLogoutModal,
  toggleLogoutLoading
} from '../../actions/modal_logout';

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
          <Menu.Item onClick={props.toggleNavDrawer} key="home">
            <Link to="/">
              <Icon type="home" style={{ color: 'rgba(0,0,0,.50)' }} />
              Home
            </Link>
          </Menu.Item>
          {props.isAuthenticated && (
            <Menu.Item onClick={props.toggleNavDrawer} key="createPost">
              <Link to="/CreatePost">
                <Icon type="plus" style={{ color: 'rgba(0,0,0,.50)' }} />
                Create Post
              </Link>
            </Menu.Item>
          )}
          {props.isAuthenticated && (
            <Menu.Item onClick={props.toggleNavDrawer} key="myAccount">
              <Link to="/Account">
                <Icon type="user" style={{ color: 'rgba(0,0,0,.50)' }} />
                My Account
              </Link>
            </Menu.Item>
          )}
          {props.isAuthenticated && (
            <Menu.Item onClick={props.toggleNavDrawer} key="myPosts">
              <Link to="/Account">
                <Icon type="form" style={{ color: 'rgba(0,0,0,.50)' }} />
                My Posts
              </Link>
            </Menu.Item>
          )}
          {props.isAuthenticated && (
            <Menu.Item onClick={props.toggleNavDrawer} key="myMessages">
              <Link to="/Account">
                <Icon type="mail" style={{ color: 'rgba(0,0,0,.50)' }} />
                My Messages
              </Link>
            </Menu.Item>
          )}
          {props.isAuthenticated && (
            <Menu.Item onClick={props.toggleNavDrawer} key="myFavorites">
              <Link to="/Account">
                <Icon type="star" style={{ color: 'rgba(0,0,0,.50)' }} />
                My Favorites
              </Link>
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
            <Menu.Item onClick={props.toggleLogoutModal} key="logout">
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
  {
    toggleRegisterModal,
    toggleLoginModal,
    toggleNavDrawer,
    toggleLogoutModal,
    toggleLogoutLoading
  }
)(NavItemsDrawer);
