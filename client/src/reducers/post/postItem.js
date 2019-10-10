import { OPEN_POST_MODAL, CLOSE_POST_MODAL } from '../../actions/types';

const initialState = {
  isVisible: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case OPEN_POST_MODAL:
      console.log('post modal reducer');
      return {
        ...state,
        isVisible: true
      };
    case CLOSE_POST_MODAL:
      return {
        ...state,
        isVisible: false
      };
    default:
      return state;
  }
}
