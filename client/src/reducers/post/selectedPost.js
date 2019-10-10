import { OPEN_POST_MODAL, CLOSE_POST_MODAL } from '../../actions/types';

const initialState = {
  _id: null,
  user: null,
  title: null,
  price: null,
  boardType: null,
  condition: null,
  description: null,
  tail: null,
  finSystem: null,
  finConfiguration: null,
  construction: null,
  glassing: null,
  contour: null,
  waveSize: null,
  drive: null,
  paddlePower: null,
  movability: null,
  shaper: null,
  model: null,
  images: [],
  location: {
    lat: null,
    lng: null,
    country: null,
    state: null,
    city: null,
    postalCode: null
  },
  likes: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case OPEN_POST_MODAL:
      console.log('post modal reducer');
      return {
        ...state,
        isVisible: true
      };
    case CLOSE_POST_MODAL:
      return {
        ...state,
        isVisible: false
      };
    default:
      return state;
  }
}
