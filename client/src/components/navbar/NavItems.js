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
                {props.username}
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
            <Menu.Item key="createPost">
              <Icon type="plus" style={{ color: 'rgba(0,0,0,.50)' }} />
              Create Post
            </Menu.Item>
            <Menu.Item key="myAccount">
              <Icon type="user" style={{ color: 'rgba(0,0,0,.50)' }} />
              My Account
            </Menu.Item>
            <Menu.Item key="myPosts">
              <Icon type="form" style={{ color: 'rgba(0,0,0,.50)' }} />
              My Posts
            </Menu.Item>

            <Menu.Item key="myMessages">
              <Icon type="mail" style={{ color: 'rgba(0,0,0,.50)' }} />
              My Messages
            </Menu.Item>
            <Menu.Item key="myFavorites">
              <Icon type="star" style={{ color: 'rgba(0,0,0,.50)' }} />
              My Favorites
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item onClick={props.toggleLogoutModal} key="logout">
              <Icon type="logout" style={{ color: 'rgba(0,0,0,.50)' }} />
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
  if (state.auth.isAuthenticated) {
    return {
      isAuthenticated: state.auth.isAuthenticated,
      username: state.auth.user.username
    };
  } else {
    return {
      isAuthenticated: state.auth.isAuthenticated
    };
  }
};

export default connect(
  mapStateToProps,
  { toggleRegisterModal, toggleLoginModal, toggleLogoutModal, toggleNavDrawer }
)(Navbar);
