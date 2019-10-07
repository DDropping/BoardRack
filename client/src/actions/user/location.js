import axios from 'axios';
import store from '../../store';

import {
  UPDATE_GEOLOCATION,
  LOADING_USER_LOCATION,
  LOADING_USER_LOCATION_DONE,
  SAVING_USER_LOCATION,
  SAVING_USER_LOCATION_DONE,
  DISPLAY_LOCATION_FORM,
  HIDE_LOCATION_FORM
} from '../types';

// SET ISLOADING TO TRUE ----------------------------------------
export const loadingLocation = () => dispatch => {
  dispatch({ type: LOADING_USER_LOCATION });
};

// EDIT DISPLAYED LOCATION ----------------------------------------
export const editLocation = () => dispatch => {
  dispatch({ type: DISPLAY_LOCATION_FORM });
};

// Save location
export const saveLocation = (city, state, postalCode) => dispatch => {
  dispatch({ type: SAVING_USER_LOCATION });
  try {
    // fetch user location
    console.log(city, state, postalCode);
  } catch (err) {
    console.log(err);
    dispatch({ type: SAVING_USER_LOCATION_DONE });
    dispatch({ type: HIDE_LOCATION_FORM });
  }
};

// GET USER'S LOCATION ----------------------------------------
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
    dispatch({ type: UPDATE_GEOLOCATION, payload: res.data });
    dispatch({ type: LOADING_USER_LOCATION_DONE });

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
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: LOADING_USER_LOCATION_DONE });
  }
};

// UPDATE USER'S LOCATION IN DB ----------------------------------------
export const updateUserLocation = location => async dispatch => {
  try {
    await axios.put('/api/accounts/updateLocation', location);
  } catch (err) {
    console.log(err);
  }
};
