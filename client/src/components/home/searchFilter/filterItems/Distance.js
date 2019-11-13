import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputNumber, Button } from 'antd';

import { failNotification } from '../../../util/Notification';
import {
  loadingLocation,
  editLocation,
  getUserAddress
} from '../../../../actions/user/location';

//import LocationButton from '../../../createPost/confirmPost/location/GetLocationButton';

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
      <br />
      <InputNumber
        size="small"
        defaultValue={25}
        formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\$\s?|(,*)/g, '')}
      />{' '}
      miles from{' '}
      <InputNumber
        size="small"
        placeholder={postalCode ? postalCode : 'area code'}
        formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\$\s?|(,*)/g, '')}
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
