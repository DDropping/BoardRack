import {
  AUTH_USER,
  AUTH_ERROR,
  TOGGLE_REGISTER_BUTTON_LOADING
} from '../actions/types';

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: '',
  registerButton: 'primary',
  isRegisterButtonLoading: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        authenticated: action.payload
      };
    case AUTH_ERROR:
      return {
        ...state,
        errorMessage: action.payload
      };
    case TOGGLE_REGISTER_BUTTON_LOADING:
      return {
        ...state,
        isRegisterButtonLoading: action.payload
      };
    default:
      return state;
  }
}
