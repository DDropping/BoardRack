import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, Button, Icon } from 'antd';

import AccountAvatar from './AccountAvatar';
import { toggleRegisterModal } from '../../actions/modals/registerModal';
import { toggleLoginModal } from '../../actions/modals/loginModal';
import { toggleNavDrawer } from '../../actions/drawers/navDrawer';
import { toggleLogoutModal } from '../../actions/modals/logoutModal';

const Navbar = props => {
  return (
    <div>
      <Menu className="navigationItems" mode="horizontal">
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        {props.isAuthenticated && (
          <Menu.Item key="createPost">Create Post</Menu.Item>
        )}
        {props.isAuthenticated && (
          <Menu.SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Icon type="user" />
                {props.username}
              </span>
            }
          >
            <AccountAvatar />
            <Menu.Item key="subCreatePost">
              <Link to="/CreatePost">
                <Icon type="plus" style={{ color: 'rgba(0,0,0,.50)' }} />
                Create Post
              </Link>
            </Menu.Item>

            <Menu.Item key="subMyAccount">
              <Link to="/Account">
                <Icon type="user" style={{ color: 'rgba(0,0,0,.50)' }} />
                My Account
              </Link>
            </Menu.Item>
            <Menu.Item key="subMyPosts">
              <Link to="/Account">
                <Icon type="form" style={{ color: 'rgba(0,0,0,.50)' }} />
                My Posts
              </Link>
            </Menu.Item>

            <Menu.Item key="subMyMessages">
              <Link to="/Account">
                <Icon type="mail" style={{ color: 'rgba(0,0,0,.50)' }} />
                My Messages
              </Link>
            </Menu.Item>
            <Menu.Item key="subMyFavorites">
              <Link to="/Account">
                <Icon type="star" style={{ color: 'rgba(0,0,0,.50)' }} />
                My Favorites
              </Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item onClick={props.toggleLogoutModal} key="subLogout">
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
  if (state.auth.user) {
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
