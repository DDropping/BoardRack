import React from 'react';
import { Link } from 'react-router-dom';

import NavItems from './NavItems';
import NavItemsDrawer from './NavItemsDrawer';
import './nav.css';

const Navbar = () => {
  return (
    <span className="navbar">
      <div className="logo">
        <Link to="/">
          <img
            alt="logo"
            src={process.env.PUBLIC_URL + '/images/br_logo_xs.jpg'}
          />
        </Link>
      </div>
      <div className="navItems">
        <NavItems />
        <NavItemsDrawer />
      </div>
      <div className="clear" />
    </span>
  );
};

export default Navbar;
