import axios from 'axios';
import store from '../../store';

import { UPDATE_GEOLOCATION } from '../types';

// Get user's location
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
      //if user is logged in
      if (!store.getState().auth.user.location) {
        //if user doesn't have a saved location yet
        const body = {
          location: {
            lat: res.data.lat,
            lng: res.data.lng,
            country: res.data.Country,
            state: res.data.State,
            city: res.data.City,
            zip: res.data.PostalCode
          }
        };
        dispatch(updateUserLocation(body));
        console.log('yes');
        //await axios.put('/api/accounts/updateLocation', body);
      }
    }
  } catch (err) {
    console.log(err);
  }
};

//Update user's location in DB
export const updateUserLocation = location => async dispatch => {
  console.log(location);
  try {
    await axios.put('/api/accounts/updateLocation', location);
  } catch (err) {
    console.log(err);
  }
};
