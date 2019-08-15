import { TOGGLE_REGISTER_MODAL } from '../../actions/types';

const initialState = {
  visible: false,
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_REGISTER_MODAL:
      return {
        ...state,
        visible: !state.visible
      };
    default:
      return state;
  }
}
