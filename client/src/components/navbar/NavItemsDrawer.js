import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Menu, Icon, Drawer } from 'antd';

import {
  toggleNavDrawer,
  toggleRegisterModal,
  toggleLoginModal,
  toggleLogoutModal
} from '../../actions/overlay';

const NavItemsDrawer = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector(state => state.overlay.isNavDrawerVisible);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <div>
      <Drawer
        placement="right"
        closable={false}
        onClose={() => dispatch(toggleNavDrawer())}
        visible={isVisible}
        style={{ zIndex: 10 }}
      >
        <Menu>
          <Menu.Item onClick={() => dispatch(toggleNavDrawer())} key="home">
            <Link to="/">
              <Icon type="home" style={{ color: 'rgba(0,0,0,.50)' }} />
              Home
            </Link>
          </Menu.Item>
          {isAuthenticated && (
            <Menu.Item
              onClick={() => dispatch(toggleNavDrawer())}
              key="createPost"
            >
              <Link to="/CreatePost">
                <Icon type="plus" style={{ color: 'rgba(0,0,0,.50)' }} />
                Create Post
              </Link>
            </Menu.Item>
          )}
          {isAuthenticated && (
            <Menu.Item
              onClick={() => dispatch(toggleNavDrawer())}
              key="myAccount"
            >
              <Link to="/Account">
                <Icon type="user" style={{ color: 'rgba(0,0,0,.50)' }} />
                My Account
              </Link>
            </Menu.Item>
          )}
          {isAuthenticated && (
            <Menu.Item
              onClick={() => dispatch(toggleNavDrawer())}
              key="myPosts"
            >
              <Link to="/Account">
                <Icon type="form" style={{ color: 'rgba(0,0,0,.50)' }} />
                My Posts
              </Link>
            </Menu.Item>
          )}
          {isAuthenticated && (
            <Menu.Item
              onClick={() => dispatch(toggleNavDrawer())}
              key="myMessages"
            >
              <Link to="/Account">
                <Icon type="mail" style={{ color: 'rgba(0,0,0,.50)' }} />
                My Messages
              </Link>
            </Menu.Item>
          )}
          {isAuthenticated && (
            <Menu.Item
              onClick={() => dispatch(toggleNavDrawer())}
              key="myFavorites"
            >
              <Link to="/Account">
                <Icon type="star" style={{ color: 'rgba(0,0,0,.50)' }} />
                My Favorites
              </Link>
            </Menu.Item>
          )}
          {!isAuthenticated && (
            <Menu.Item onClick={() => dispatch(toggleLoginModal())} key="login">
              <Icon type="user" style={{ color: 'rgba(0,0,0,.50)' }} />
              Login
            </Menu.Item>
          )}
          {!isAuthenticated && (
            <Menu.Item
              onClick={() => dispatch(toggleRegisterModal())}
              key="register"
            >
              <Icon type="user-add" style={{ color: 'rgba(0,0,0,.50)' }} />
              Register
            </Menu.Item>
          )}
          {isAuthenticated && <Menu.Divider />}
          {isAuthenticated && (
            <Menu.Item
              onClick={() => dispatch(toggleLogoutModal())}
              key="logout"
            >
              <Icon type="logout" style={{ color: 'rgba(0,0,0,.50)' }} />
              Logout
            </Menu.Item>
          )}
        </Menu>
      </Drawer>
    </div>
  );
};

export default NavItemsDrawer;
