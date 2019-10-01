import { PUBLISH_LOADING, PUBISH_DONE } from '../../actions/types';

const initialState = {
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PUBLISH_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case PUBISH_DONE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}
