import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'antd';

import { getUsersAproxLocation } from '../actions/user/location';

const Test = () => {
  const [postalCodeEntered, setPostalCodeEntered] = useState('postalCode');
  const dispatch = useDispatch();
  return (
    <div>
      <Button onClick={() => dispatch(getUsersAproxLocation())}>
        location
      </Button>
      <input
        style={{ width: '80px' }}
        onChange={e => {
          setPostalCodeEntered(e.target.value);
          console.log(postalCodeEntered);
        }}
      />
    </div>
  );
};

export default Test;
