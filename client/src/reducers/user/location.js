import {
  UPDATE_USER_LOCATION_WITH_IP,
  UPDATE_USER_LOCATION_WITH_GEO,
  USER_LOADED_SET_LOCATION,
  LOADING_USER_LOCATION,
  LOADING_USER_LOCATION_DONE,
  SAVING_USER_LOCATION,
  SAVING_USER_LOCATION_DONE,
  DISPLAY_LOCATION_FORM,
  HIDE_LOCATION_FORM,
  UPDATE_LOCATION_IMAGE
} from '../../actions/types';

const initialState = {
  isLoading: false,
  isSaving: false,
  displayLocationForm: false,
  location: {
    lat: null,
    lng: null,
    country: null,
    state: 'CA',
    city: 'San Francisco',
    postalCode: '94122',
    locationImage: null
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LOCATION_IMAGE:
      return {
        ...state,
        location: {
          ...state.location,
          locationImage: action.payload
        }
      };
    //set user's location state with ip location services with IpStack API
    case UPDATE_USER_LOCATION_WITH_IP:
      //set if location has not been already set. To prevent 'set saved default user's location' overwrite by 'set ip location'
      if (
        state.location.lng === null &&
        state.location.lat === null &&
        state.location.postalCode === null &&
        state.location.city === null &&
        state.location.state === null
      ) {
        return {
          ...state,
          location: {
            lat: action.payload.latitude,
            lng: action.payload.longitude,
            country: action.payload.country_name,
            state: action.payload.region_name,
            city: action.payload.city,
            postalCode: action.payload.zip
          }
        };
      } else {
        return {
          ...state
        };
      }
    //set user's location state with geolocation & developer.here API
    case UPDATE_USER_LOCATION_WITH_GEO:
      return {
        ...state,
        location: {
          lat: action.payload.lat,
          lng: action.payload.lng,
          country: action.payload.Country,
          state: action.payload.State,
          city: action.payload.City,
          postalCode: action.payload.PostalCode
        }
      };
    //set user's saved default location to location state
    case USER_LOADED_SET_LOCATION:
      return {
        ...state,
        location: {
          lat: action.payload.lat,
          lng: action.payload.lng,
          country: action.payload.country,
          state: action.payload.state,
          city: action.payload.city,
          postalCode: action.payload.postalCode
        }
      };
    case SAVING_USER_LOCATION:
      return {
        ...state,
        isSaving: true
      };
    case SAVING_USER_LOCATION_DONE:
      return {
        ...state,
        isSaving: false
      };
    case DISPLAY_LOCATION_FORM:
      return {
        ...state,
        displayLocationForm: true
      };
    case HIDE_LOCATION_FORM:
      return {
        ...state,
        displayLocationForm: false
      };
    case LOADING_USER_LOCATION:
      return {
        ...state,
        isLoading: true
      };
    case LOADING_USER_LOCATION_DONE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}
