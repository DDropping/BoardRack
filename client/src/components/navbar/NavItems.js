import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, Button, Icon } from 'antd';

import AccountAvatar from './AccountAvatar';
import {
  toggleNavDrawer,
  toggleLoginModal,
  toggleRegisterModal,
  toggleLogoutModal
} from '../../actions/overlay';

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.user);

  return (
    <div>
      <Menu className="navigationItems" mode="horizontal">
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        {isAuthenticated && (
          <Menu.Item key="createPost">
            <Link to="/CreatePost">Create Post</Link>
          </Menu.Item>
        )}
        {user !== null && (
          <Menu.SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Icon type="user" />
                {user.username}
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
            <Menu.Item
              onClick={() => dispatch(toggleLogoutModal())}
              key="subLogout"
            >
              <Icon type="logout" style={{ color: 'rgba(0,0,0,.50)' }} />
              Logout
            </Menu.Item>
          </Menu.SubMenu>
        )}

        {!isAuthenticated && (
          <Menu.Item onClick={() => dispatch(toggleLoginModal())} key="login">
            Login
          </Menu.Item>
        )}

        {!isAuthenticated && (
          <Menu.Item
            onClick={() => dispatch(toggleRegisterModal())}
            key="register"
          >
            Register
          </Menu.Item>
        )}
      </Menu>

      <div className="drawerButton">
        <Button onClick={() => dispatch(toggleNavDrawer())}>
          <Icon type="menu" />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
