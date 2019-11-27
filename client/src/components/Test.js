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
    </div>
  );
};

export default Test;
