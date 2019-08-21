import {
  OPEN_RESULT_MODAL,
  CLOSE_RESULT_MODAL,
  LOAD_RESULT_MODAL_DATA,
  RESET_RESULT_MODAL_DATA
} from '../../actions/types';

const initialState = {
  isVisible: false,
  status: '',
  title: '',
  subTitle: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_RESULT_MODAL_DATA:
      return {
        ...state,
        status: action.payload.status,
        title: action.payload.title,
        subTitle: action.payload.subTitle
      };
    case RESET_RESULT_MODAL_DATA:
      return {
        ...state,
        status: '',
        title: '',
        subTitle: ''
      };
    case OPEN_RESULT_MODAL:
      return {
        ...state,
        isVisible: true
      };
    case CLOSE_RESULT_MODAL:
      return {
        ...state,
        isVisible: false
      };
    default:
      return state;
  }
}
