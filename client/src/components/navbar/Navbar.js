import React from 'react';
import NavItems from './NavItems';
import './nav.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          alt="logo"
          src={process.env.PUBLIC_URL + '/images/br_logo_xs.jpg'}
        />
      </div>
      <div className="navItems">
        <NavItems />
      </div>
    </div>
  );
};

export default Navbar;
