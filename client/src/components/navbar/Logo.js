import React from 'react';
import { Link } from 'react-router-dom';

import './logo.css';

const Logo = () => {
  return (
    <div className="br-logo-wrapper">
      <div className="br-logo-desktop-wrapper">
        <Link to="/">
          <img
            className="br-logo-desktop"
            alt="br-logo-desktop"
            src={process.env.PUBLIC_URL + '/images/br_logo_origional.png'}
          />
        </Link>
      </div>
      <div>
        <div className="br-logo-mobile-wrapper">
          <Link to="/">
            <img
              className="br-logo-mobile"
              alt="logo-small"
              src={process.env.PUBLIC_URL + '/images/br_logo_small.png'}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Logo;
