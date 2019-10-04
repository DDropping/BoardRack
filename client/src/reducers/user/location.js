import { UPDATE_GEOLOCATION } from '../../actions/types';

const initialState = {
  lat: null,
  lng: null,
  country: null,
  state: null,
  city: null,
  postalCode: null
};

export default function(state = initialState, action) {
  console.log('reducer: ' + action.payload);
  switch (action.type) {
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
