import { LOAD_POSTS } from '../actions/types';

const initialState = {
  postList: [],
  selectedPost: {
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
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        postList: action.payload
      };
    default:
      return state;
  }
}
