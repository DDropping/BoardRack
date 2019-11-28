import {
  UPDATE_USER_APPROX_LOCATION,
  UPDATE_GEOLOCATION,
  USER_LOADED_SET_LOCATION,
  LOADING_USER_LOCATION,
  LOADING_USER_LOCATION_DONE,
  SAVING_USER_LOCATION,
  SAVING_USER_LOCATION_DONE,
  DISPLAY_LOCATION_FORM,
  HIDE_LOCATION_FORM
} from '../../actions/types';

const initialState = {
  isLoading: false,
  isSaving: false,
  displayLocationForm: false,
  location: {
    lat: null,
    lng: null,
    country: null,
    state: null,
    city: null,
    postalCode: null
  },
  approxLocation: {
    approxLat: null,
    approxLng: null,
    approxCountry: null,
    approxState: 'CA',
    approxCity: 'San Francisco',
    approxPostalCode: 94122
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_APPROX_LOCATION:
      return {
        ...state,
        approxLocation: {
          approxLat: action.payload.latitude,
          approxLng: action.payload.longitude,
          approxCountry: action.payload.country_name,
          approxState: action.payload.region_name,
          approxCity: action.payload.city,
          approxPostalCode: action.payload.zip
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
    case UPDATE_GEOLOCATION:
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
    default:
      return state;
  }
}
