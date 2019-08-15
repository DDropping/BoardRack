import { OPEN_MODAL, CLOSE_MODAL, TOGGLE_MODAL } from '../actions/types';

const initialState = {
  visible: false,
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        visible: true
      };
    case CLOSE_MODAL:
      return {
        ...state,
        visible: false
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        visible: !state.visible
      };
    default:
      return state;
  }
}
