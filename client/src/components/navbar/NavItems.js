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
        {/* Home ------------------------------------- */}
        {/* <Menu.Item key="home">
          <strong>
            <Link to="/">Home</Link>
          </strong>
        </Menu.Item> */}

        {/* Create Post ------------------------------------- */}
        {isAuthenticated ? (
          <Link to="/CreatePost">
            <Button type="primary" ghost style={{ marginRight: '10px' }}>
              <strong>
                <Icon type="plus" style={{ paddingRight: '2px' }} />
                Create Post
              </strong>
            </Button>
          </Link>
        ) : (
          <Button
            type="primary"
            ghost
            onClick={() => dispatch(toggleLoginModal())}
            style={{ marginRight: '10px' }}
          >
            <strong>
              <Icon type="plus" style={{ paddingRight: '2px' }} />
              Create Post
            </strong>
          </Button>
        )}

        {/* Create Post ------------------------------------- */}
        {/* {isAuthenticated && (
          <Menu.Item key="createPost">
            <Link to="/CreatePost">Create Post</Link>
          </Menu.Item>
        )} */}

        {/* User Menu ------------------------------------- */}
        {user !== null && isAuthenticated && (
          <Menu.SubMenu
            title={
              <span className="submenu-title-wrapper">
                <strong>
                  <Icon type="user" />
                  {user.username}
                </strong>
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

        {/* Login ------------------------------------- */}
        {!isAuthenticated && (
          <Menu.Item onClick={() => dispatch(toggleLoginModal())} key="login">
            <strong>Login</strong>
          </Menu.Item>
        )}

        {/* Register ------------------------------------- */}
        {!isAuthenticated && (
          <Menu.Item
            onClick={() => dispatch(toggleRegisterModal())}
            key="register"
          >
            <strong>Register</strong>
          </Menu.Item>
        )}
      </Menu>

      {/* Hamburger Menu ------------------------------------- */}
      <div className="drawerButton">
        <Button onClick={() => dispatch(toggleNavDrawer())}>
          <Icon type="menu" />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
