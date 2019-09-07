import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import NavItems from './NavItems';
import NavItemsDrawer from './NavItemsDrawer';
import './nav.css';

const Navbar = props => {
  return (
    <span>
      <div className="logo">
        <Link to="/">
          <img
            alt="logo"
            src={process.env.PUBLIC_URL + '/images/br_logo_xs.jpg'}
          />
        </Link>
      </div>
      <div className="navItems">
        {!props.isLoading && (
          <Fragment>
            <NavItems />
            <NavItemsDrawer />
          </Fragment>
        )}
      </div>
      <div className="clear" />
    </span>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.auth.isLoading
  };
};

export default connect(
  mapStateToProps,
  null
)(Navbar);
