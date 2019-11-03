import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';

import {
  getUserAddress,
  loadingLocation,
  editLocation
} from '../../../../actions/user/location';

const GetLocationButton = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.location.isLoading);

  const handleGetLocation = () => {
    dispatch(loadingLocation());
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(retrievedLocation, showForm);
    } else {
      dispatch(editLocation());
    }
  };

  const retrievedLocation = location => {
    const lat = location.coords.latitude;
    const lng = location.coords.longitude;
    dispatch(getUserAddress({ lat, lng }));
  };

  const showForm = () => {
    dispatch(editLocation());
  };

  return (
    <Button
      onClick={handleGetLocation}
      icon="environment"
      loading={isLoading}
      type="primary"
      ghost
      style={{ display: 'inline-block', marginRight: '10px' }}
    >
      Get Location
    </Button>
  );
};

export default GetLocationButton;
