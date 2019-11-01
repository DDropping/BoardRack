import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import NavItems from './NavItems';
import NavItemsDrawer from './NavItemsDrawer';
import './nav.css';

const Navbar = () => {
  const isLoading = useSelector(state => state.auth.isLoading);
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img
            alt="logo"
            src={process.env.PUBLIC_URL + '/images/br_logo_xs.jpg'}
          />
        </Link>
      </div>
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
