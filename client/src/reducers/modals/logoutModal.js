import { TOGGLE_LOGOUT_MODAL } from '../../actions/types';

const initialState = {
  isisible: false,
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LOGOUT_MODAL:
      return {
        ...state,
        isVisible: !state.isVisible
      };
    default:
      return state;
  }
}
