import axios from 'axios';
import store from '../../store';

import { UPDATE_GEOLOCATION } from '../types';

export const getUserAddress = ({ lat, lng }) => async dispatch => {
  //set headers for request
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  //stringify lat and lng
  const body = JSON.stringify({ lat, lng });

  try {
    const res = await axios.post('/api/externalAPI/getAddress', body, config);
    console.log(res.data);
    dispatch({ type: UPDATE_GEOLOCATION, payload: res.data });

    if (store.getState().auth.user) {
      console.log('user logged in');
      updateUserLocation();
    }
  } catch (err) {
    console.log(err);
  }
};

export const updateUserLocation = () => {
  console.log('inside update user location');
};
