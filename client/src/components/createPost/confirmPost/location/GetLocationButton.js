import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import {
  getUserAddress,
  loadingLocation
} from '../../../../actions/user/location';

const GetLocationButton = props => {
  const handleGetLocation = () => {
    props.loadingLocation();
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
    <Button
      onClick={handleGetLocation}
      icon="environment"
      loading={props.isLoading}
      type="primary"
      ghost
      style={{ display: 'inline-block', marginRight: '10px' }}
    >
      Get Location
    </Button>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.location.isLoading
  };
};

export default connect(
  mapStateToProps,
  { getUserAddress, loadingLocation }
)(GetLocationButton);
