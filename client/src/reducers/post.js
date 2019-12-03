import {
  LOAD_POSTS,
  POST_VIEWED,
  UPDATE_SELECTED_POST,
  TOGGLE_POST_MODAL
} from '../actions/types';

const initialState = {
  isPostModalOpen: false,
  viewedPosts: [],
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
    favorites: []
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_POST_MODAL:
      return {
        ...state,
        isPostModalOpen: action.payload
      };
    case LOAD_POSTS:
      return {
        ...state,
        postList: action.payload
      };
    case POST_VIEWED:
      return {
        ...state,
        viewedPosts: [...state.viewedPosts, action.payload]
      };
    case UPDATE_SELECTED_POST:
      return {
        ...state,
        selectedPost: {
          _id: action.payload.post._id,
          user: action.payload.post.user,
          title: action.payload.post.title,
          price: action.payload.post.price,
          boardType: action.payload.post.boardType,
          condition: action.payload.post.condition,
          description: action.payload.post.description,
          tail: action.payload.post.tail,
          finSystem: action.payload.post.finSystem,
          finConfiguration: action.payload.post.finConfiguration,
          construction: action.payload.post.construction,
          glassing: action.payload.post.glassing,
          contour: action.payload.post.contour,
          waveSize: action.payload.post.waveSize,
          drive: action.payload.post.drive,
          paddlePower: action.payload.post.paddlePower,
          movability: action.payload.post.movability,
          shaper: action.payload.post.shaper,
          model: action.payload.post.model,
          images: action.payload.post.images,
          location: action.payload.post.location,
          favorites: action.payload.post.favorites
        }
      };
    default:
      return state;
  }
}
