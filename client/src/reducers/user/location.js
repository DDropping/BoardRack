import { UPDATE_GEOLOCATION } from '../../actions/types';

const initialState = {
  longitude: null,
  latitude: null,
  country: null,
  state: null,
  city: null,
  zip: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_GEOLOCATION:
      return {
        ...state,
        longitude: action.payload,
        latitude: action.payload
      };

    default:
      return state;
  }
}
