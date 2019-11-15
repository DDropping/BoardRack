import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputNumber, Button } from 'antd';

import { failNotification } from '../../../util/Notification';
import {
  loadingLocation,
  getUserAddress
} from '../../../../actions/user/location';

const Distance = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.location.isLoading);
  const postalCode = useSelector(state => state.location.location.postalCode);

  const handleGetLocation = () => {
    dispatch(loadingLocation());
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        retrievedLocation,
        showFailedNotification
      );
    } else {
      showFailedNotification();
    }
  };

  const retrievedLocation = location => {
    const lat = location.coords.latitude;
    const lng = location.coords.longitude;
    dispatch(getUserAddress({ lat, lng }));
  };

  const showFailedNotification = () => {
    failNotification('Could Not Load Location');
  };

  return (
    <div>
      <strong>Distance: </strong>
      <div
        style={{ borderBottom: '1px solid #E9E9E9', marginBottom: '3px' }}
      ></div>
      <InputNumber size="small" defaultValue={25} /> miles from{' '}
      <InputNumber
        size="small"
        placeholder={postalCode ? postalCode : 'area code'}
      />
      <Button
        onClick={handleGetLocation}
        size="small"
        icon="environment"
        loading={isLoading}
        type="primary"
        ghost
        style={{ display: 'inline-block', marginLeft: '5px' }}
      />
    </div>
  );
};

export default Distance;
