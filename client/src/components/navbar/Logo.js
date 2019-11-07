import React from 'react';
import { Link } from 'react-router-dom';

import './logo.css';

const Logo = () => {
  return (
    <div>
      <div className="br-logo-desktop">
        <Link to="/">
          <img
            alt="br-logo-desktop"
            src={process.env.PUBLIC_URL + '/images/br_logo_xs.jpg'}
          />
        </Link>
      </div>
      <Link to="/">
        <div className="br-logo-mobile">
          <img
            alt="logo-small"
            src={process.env.PUBLIC_URL + '/images/br_logo_small_xs.png'}
          />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
