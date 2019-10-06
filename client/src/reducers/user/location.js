import {
  UPDATE_GEOLOCATION,
  USER_LOADED_SET_LOCATION,
  LOADING_USER_LOCATION,
  LOADING_USER_LOCATION_DONE
} from '../../actions/types';

const initialState = {
  isLoading: false,
  lat: null,
  lng: null,
  country: null,
  state: null,
  city: null,
  postalCode: null
};

export default function(state = initialState, action) {
  switch (action.type) {
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
        lat: action.payload.lat,
        lng: action.payload.lng,
        country: action.payload.country,
        state: action.payload.state,
        city: action.payload.city,
        postalCode: action.payload.zip
      };
    case UPDATE_GEOLOCATION:
      return {
        ...state,
        lat: action.payload.lat,
        lng: action.payload.lng,
        country: action.payload.Country,
        state: action.payload.State,
        city: action.payload.City,
        postalCode: action.payload.PostalCode
      };
    default:
      return state;
  }
}
