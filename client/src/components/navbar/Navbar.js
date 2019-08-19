import React from 'react';
import NavItems from './NavItems';
import { Link } from 'react-router-dom';
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
      </div>
      <div className="clear" />
    </span>
  );
};

export default Navbar;
