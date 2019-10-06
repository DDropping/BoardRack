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
      console.log('user is logged in');
      //if user is logged in
      if (!store.getState().auth.user.location) {
        //if user doesn't have a saved location yet
        console.log('Saving current location to account');
        //updateUserLocation();
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
        console.log('body: ' + res.data.lat);
        const res2 = await axios.put('/api/accounts/updateLocation', body);
        console.log(res2);
      }
    }
  } catch (err) {
    console.log(err);
  }
};

//set user's location
export const updateUserLocation = location => async dispatch => {
  console.log('inside update user location');
  console.log(location);
  try {
    const body = {
      location: {
        lat: { type: String },
        lng: { type: String },
        country: { type: String },
        state: { type: String },
        city: { type: String },
        zip: { type: String }
      }
    };
    const res = await axios.put('/api/accounts/updateLocation');
  } catch (err) {
    console.log(err);
  }
};
