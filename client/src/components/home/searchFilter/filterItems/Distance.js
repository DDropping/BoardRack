import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputNumber, Icon } from 'antd';

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
      <InputNumber style={{ width: '50px' }} size="small" defaultValue={25} />{' '}
      miles from{' '}
      <InputNumber
        style={{ width: '80px' }}
        size="small"
        placeholder={postalCode ? postalCode : 'area code'}
      />
      {!isLoading ? (
        <Icon
          style={{ marginLeft: '5px', fontSize: '20px' }}
          type="environment"
          theme="twoTone"
          twoToneColor="#00458a"
          onClick={handleGetLocation}
        />
      ) : (
        <Icon
          type="loading"
          style={{ marginLeft: '5px', color: '#00458a', fontSize: '20px' }}
        />
      )}
    </div>
  );
};

export default Distance;
