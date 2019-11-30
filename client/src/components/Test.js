import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'antd';

import { getUsersAproxLocation } from '../actions/user/location';

const Test = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button onClick={() => dispatch(getUsersAproxLocation())}>
        location
      </Button>
      <div style={{ width: '20px', height: '20px' }}>
        <img
          style={{ maxWidth: '100%', maxHeight: '100%' }}
          className="br-logo-desktop"
          alt="br-logo-desktop"
          src={process.env.PUBLIC_URL + '/images/br-favicon2-xl.png'}
        />
      </div>
    </div>
  );
};

export default Test;
