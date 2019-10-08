import axios from 'axios';
import store from '../../store';

import { UpdateDefaultLocationNotification } from '../../components/util/Notification';
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

// GET USER'S LOCATION WITH ADDRESS FORM ----------------------------------------
export const saveLocation = formProps => async dispatch => {
  dispatch({ type: LOADING_USER_LOCATION_DONE });
  dispatch({ type: SAVING_USER_LOCATION });

  const { address, city, state, postalCode } = formProps;

  //set headers for request
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ address, city, state, postalCode });

  try {
    const res = await axios.post('/api/externalAPI/getCoords', body, config);
    dispatch({ type: UPDATE_GEOLOCATION, payload: res.data });
    dispatch({ type: SAVING_USER_LOCATION_DONE });
    dispatch({ type: HIDE_LOCATION_FORM });

    //save location as user's default location if no location exists yet
    if (store.getState().auth.isAuthenticated) {
      //if user is logged in
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
      if (!store.getState().auth.user.location) {
        //if user doesn't have a saved location yet
        dispatch(updateUserLocation(body));
      }
      //if new location is greater than 1 mile(0.014degrees) away, ask if user wants to save new location as default
      var latDistance = Math.abs(
        Math.abs(store.getState().auth.user.location.lat) -
          Math.abs(store.getState().location.lat)
      );
      var lngDistance = Math.abs(
        Math.abs(store.getState().auth.user.location.lng) -
          Math.abs(store.getState().location.lng)
      );
      if (latDistance > 0.014 && lngDistance > 0.014) {
        UpdateDefaultLocationNotification(body);
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: SAVING_USER_LOCATION_DONE });
    dispatch({ type: HIDE_LOCATION_FORM });
  }
};

// GET USER'S LOCATION WITH GEOCODE ----------------------------------------
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

    //save location as user's default location if no location exists yet
    if (store.getState().auth.isAuthenticated) {
      //if user is logged in
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
      if (!store.getState().auth.user.location) {
        //if user doesn't have a saved location yet
        dispatch(updateUserLocation(body));
      }

      //if new location is greater than 1 mile(0.014degrees) away, ask if user wants to save new location as default
      var latDistance = Math.abs(
        Math.abs(store.getState().auth.user.location.lat) -
          Math.abs(store.getState().location.lat)
      );
      var lngDistance = Math.abs(
        Math.abs(store.getState().auth.user.location.lng) -
          Math.abs(store.getState().location.lng)
      );
      if (latDistance > 0.014 && lngDistance > 0.014) {
        UpdateDefaultLocationNotification(body);
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
