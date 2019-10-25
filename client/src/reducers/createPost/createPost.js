import {
  PUBLISH_LOADING,
  PUBISH_LOADING_DONE,
  REDIRECT_TO_HOME
} from '../../actions/types';

const initialState = {
  isLoading: false,
  redirectToHome: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PUBLISH_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case PUBISH_LOADING_DONE:
      return {
        ...state,
        isLoading: false
      };
    case REDIRECT_TO_HOME: {
      return {
        ...state,
        redirectToHome: true
      };
    }
    default:
      return state;
  }
}
