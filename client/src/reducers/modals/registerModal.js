import { TOGGLE_MODAL } from '../../actions/types';

const initialState = {
  visible: false,
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        visible: !state.visible
      };
    default:
      return state;
  }
}
