import { TOGGLE_LOGIN_MODAL } from '../../actions/types';

const initialState = {
  isVisible: false,
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LOGIN_MODAL:
      return {
        ...state,
        isVisible: !state.isVisible
      };
    default:
      return state;
  }
}
