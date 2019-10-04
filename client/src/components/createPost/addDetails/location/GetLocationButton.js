import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import { getUserAddress } from '../../../../actions/user/location';

const GetLocationButton = props => {
  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(retrievedLocation);
    } else {
      console.log('no');
    }
  };

  const retrievedLocation = location => {
    const lat = location.coords.latitude;
    const lng = location.coords.longitude;
    props.getUserAddress({ lat, lng });
  };

  return (
    <Button onClick={handleGetLocation} type="primary" ghost>
      Get Location
    </Button>
  );
};

export default connect(
  null,
  { getUserAddress }
)(GetLocationButton);
