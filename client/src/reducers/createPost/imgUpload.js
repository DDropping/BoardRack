import { ADD_IMG_URL_TO_STORE } from '../../actions/types';

const INITIAL_STATE = {
  imageList: [],
  isLoading: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_IMG_URL_TO_STORE:
      return {
        ...state,
        imageList: state.imageList.concat(action.payload)
      };
    default:
      return state;
  }
}
