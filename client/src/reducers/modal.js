import { OPEN_MODAL, CLOSE_MODAL } from '../actions/types';

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
    default:
      return state;
  }
}
