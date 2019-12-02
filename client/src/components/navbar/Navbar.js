import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Logo from './Logo';
import NavItems from './NavItems';
import NavItemsDrawer from './NavItemsDrawer';
import SearchBar from './searchBar/SearchBar';
import './nav.css';

const Navbar = () => {
  const isLoading = useSelector(state => state.auth.isLoading);
  return (
    <div className="navbar">
      <Logo />
      <SearchBar />
      <div className="navItems">
        {!isLoading && (
          <Fragment>
            <NavItems />
            <NavItemsDrawer />
          </Fragment>
        )}
      </div>
      <div className="clear" />
    </div>
  );
};

export default Navbar;
