import {
  TOGGLE_REGISTER_MODAL,
  TOGGLE_REGISTER_BUTTON_LOADING
} from '../../actions/types';

const initialState = {
  isVisible: false,
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_REGISTER_MODAL:
      return {
        ...state,
        isVisible: !state.isVisible
      };
    case TOGGLE_REGISTER_BUTTON_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
}
