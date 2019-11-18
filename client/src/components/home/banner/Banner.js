import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';

import './banner.css';

const Banner = () => {
  return (
    <div className="br-banner-carousel">
      <Carousel>
        <div>
          <Link to="/">
            <img
              className="br-banner-img"
              alt="br-logo-desktop"
              src={process.env.PUBLIC_URL + '/images/br_banner_2.jpg'}
            />
          </Link>
        </div>
        <div>
          <Link to="/">
            <img
              className="br-banner-img"
              alt="br-logo-desktop"
              src={process.env.PUBLIC_URL + '/images/br_banner_1.jpg'}
            />
          </Link>
        </div>
        <div>
          <Link to="/">
            <img
              className="br-banner-img"
              alt="br-logo-desktop"
              src={process.env.PUBLIC_URL + '/images/br_banner_2.jpg'}
            />
          </Link>
        </div>
        <div>
          <Link to="/">
            <img
              className="br-banner-img"
              alt="br-logo-desktop"
              src={process.env.PUBLIC_URL + '/images/br_banner_1.jpg'}
            />
          </Link>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
