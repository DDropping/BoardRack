import React from 'react';
import { connect } from 'react-redux';
import { Menu, Button, Icon, Avatar } from 'antd';

import { toggleRegisterModal } from '../../actions/registerModal';
import { toggleLoginModal } from '../../actions/loginModal';
import { toggleNavDrawer } from '../../actions/drawer_nav';
import { toggleLogoutModal } from '../../actions/modal_logout';

const Navbar = props => {
  return (
    <div>
      <Menu className="navigationItems" mode="horizontal">
        <Menu.Item onClick={props.toggleLogoutModal} key="home">
          Home
        </Menu.Item>
        {props.isAuthenticated && <Menu.Item key="createPost">Post</Menu.Item>}
        {props.isAuthenticated && (
          <Menu.SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Icon type="user" />
                Account
              </span>
            }
          >
            <Avatar
              style={{
                marginBottom: '10px',
                marginTop: '10px',
                marginLeft: '50px',
                marginRight: '50px'
              }}
              size={200}
              icon="user"
            />
            <Menu.Item key="myAccount">My Account</Menu.Item>
            <Menu.Item key="myPosts">My Posts</Menu.Item>

            <Menu.Item key="myMessages">My Messages</Menu.Item>
            <Menu.Item key="myFavorites">My Favorites</Menu.Item>
            <Menu.Divider />
            <Menu.Item onClick={props.toggleLogoutModal} key="logout">
              Logout
            </Menu.Item>
          </Menu.SubMenu>
        )}

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

      <div className="drawerButton">
        <Button onClick={props.toggleNavDrawer}>
          <Icon type="menu" />
        </Button>
      </div>
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
  { toggleRegisterModal, toggleLoginModal, toggleLogoutModal, toggleNavDrawer }
)(Navbar);
