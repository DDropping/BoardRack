import axios from 'axios';
import store from '../../store';

import { UpdateDefaultLocationNotification } from '../../components/util/Notification';
import { loadUser } from '../auth';
import {
  UPDATE_USER_LOCATION_WITH_IP,
  UPDATE_USER_LOCATION_WITH_GEO,
  LOADING_USER_LOCATION,
  LOADING_USER_LOCATION_DONE,
  SAVING_USER_LOCATION,
  SAVING_USER_LOCATION_DONE,
  DISPLAY_LOCATION_FORM,
  HIDE_LOCATION_FORM,
  UPDATE_LOCATION_IMAGE
} from '../types';

// GET USER'S LOCATION MAP IMAGE FROM DEVELOPER.HERE API ------------------------
export const getLocationMap = ({ lat, lng }) => async dispatch => {
  try {
    //if user is logged in and lattitude and longitude are in temp location reducer in redux
    if (store.getState().auth.isAuthenticated) {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const body = {
        lat,
        lng
      };

      const locationUrl = await axios.post(
        '/api/externalAPI/locationMap',
        body,
        config
      );
      //update location image in temp location reducer
      await dispatch({
        type: UPDATE_LOCATION_IMAGE,
        payload: locationUrl.data
      });
      return locationUrl.data;
    }
  } catch (err) {
    console.log(err);
  }
};

// GET USER'S APPROXIMATE LOCATION BASED ON IP ADDRESS --------------------------
export const getUsersAproxLocation = () => async dispatch => {
  try {
    const res = await axios.get('/api/externalAPI/getApproximateLocation');
    dispatch({ type: UPDATE_USER_LOCATION_WITH_IP, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

// GET USER'S LOCATION WITH ONLY ZIP CODE ---------------------------------------
// required state and country in redux store
// get state and country from default programmed as united state, california or ip location service will overwrite with user's approximate loaction
export const getUsersLocationWithPostalCode = postalCode => async dispatch => {
  const state = store.getState().location.location.state;
  const country = store.getState().location.location.Country;
  //set headers for request
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({
    state,
    country,
    postalCode
  });

  try {
    const res = await axios.post('/api/externalAPI/getCoords', body, config);
    dispatch({ type: UPDATE_USER_LOCATION_WITH_GEO, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

// GET USER'S LOCATION WITH CITY STATE ZIP CODE --------------------------------
export const getUsersLocationWithCityStateZip = (
  city,
  state,
  postalCode,
  setIsLocationForm
) => async dispatch => {
  dispatch({ type: LOADING_USER_LOCATION });
  //set headers for request
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ city, state, postalCode });

  try {
    const res = await axios.post('/api/externalAPI/getCoords', body, config);
    dispatch({ type: UPDATE_USER_LOCATION_WITH_GEO, payload: res.data });
    setIsLocationForm(false); //hide location form
    dispatch({ type: LOADING_USER_LOCATION_DONE });
  } catch (err) {
    console.log(err);
    dispatch({ type: LOADING_USER_LOCATION_DONE });
  }
};

// SET ISLOADING TO TRUE --------------------------------------------------------
export const loadingLocation = () => dispatch => {
  dispatch({ type: LOADING_USER_LOCATION });
};

// EDIT DISPLAYED LOCATION ------------------------------------------------------
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
    dispatch({ type: UPDATE_USER_LOCATION_WITH_GEO, payload: res.data });
    dispatch({ type: SAVING_USER_LOCATION_DONE });
    dispatch({ type: HIDE_LOCATION_FORM });

    //update user's location in db if needed
    //check if user is logged in
    if (store.getState().auth.isAuthenticated) {
      var locationData = res.data;
      dispatch(checkToUpdateUserLocation({ locationData }));
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: SAVING_USER_LOCATION_DONE });
    dispatch({ type: HIDE_LOCATION_FORM });
  }
};

// GET USER'S LOCATION WITH GEOCODE ---------------------------------------------
export const getUserAddress = ({ lat, lng }) => async dispatch => {
  console.log('lat: ' + lat);
  console.log('lng: ' + lng);
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
    dispatch({ type: UPDATE_USER_LOCATION_WITH_GEO, payload: res.data });
    dispatch({ type: LOADING_USER_LOCATION_DONE });

    //update user's default location if needed
    //check if user is logged in
    if (store.getState().auth.isAuthenticated) {
      var locationData = res.data;
      dispatch(checkToUpdateUserLocation({ locationData }));
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: LOADING_USER_LOCATION_DONE });
  }
};

// CHECK TO UPDATE USER'S LOCATION IN DB / UPDATE USER'S LOCATION IN DB ----------------
//save location as user's default location if no location exists yet
export const checkToUpdateUserLocation = locationData => async dispatch => {
  try {
    //check if it's required to retrieve image of user's location from developer.here API
    var lat = locationData.lat;
    var lng = locationData.lng;

    //if user doesnt have a location saved, retrieve location image
    if (!store.getState().auth.user.location) {
      await dispatch(getLocationMap({ lat, lng }));
    }

    //if user does have a location saved in db
    if (!store.getState().auth.user.location) {
      //if new location is greater than 1 mile(0.014degrees) away, retrieve new location image
      var latDistance = Math.abs(
        store.getState().auth.user.location.lat - locationData.lat
      );
      var lngDistance = Math.abs(
        store.getState().auth.user.location.lng - locationData.lng
      );
      if (latDistance > 0.014 && lngDistance > 0.014) {
        await dispatch(getLocationMap({ lat, lng }));
      }
    }

    const body = {
      location: {
        lat: locationData.lat,
        lng: locationData.lng,
        country: locationData.Country,
        state: locationData.State,
        city: locationData.City,
        postalCode: locationData.PostalCode,
        locationImage: store.getState().location.location.locationImage
      }
    };
    //if user doesn't have a saved location yet, save their current location to db
    if (!store.getState().auth.user.location) {
      dispatch(updateUserLocation(body));
    }
    //if user does have a location saved in db
    if (!store.getState().auth.user.location) {
      //if new location is greater than 1 mile(0.014degrees) away, ask if user wants to save new location as default
      if (latDistance > 0.014 && lngDistance > 0.014) {
        UpdateDefaultLocationNotification(body);
      }
    }
  } catch (err) {
    console.log(err);
  }
};

// UPDATE USER'S LOCATION IN DB -------------------------------------------------
export const updateUserLocation = location => async dispatch => {
  try {
    await axios.put('/api/accounts/updateLocation', location);
    dispatch(loadUser());
  } catch (err) {
    console.log(err);
  }
};
