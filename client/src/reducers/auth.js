import {
  AUTH_USER,
  AUTH_ERROR,
  TOGGLE_REGISTER_BUTTON_LOADING,
  CLEAR_ERRORS
} from '../actions/types';

const INITIAL_STATE = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  errorMessage: [],
  registerButton: 'success',
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
        errorMessage: [...state.errorMessage, action.payload]
      };
    case TOGGLE_REGISTER_BUTTON_LOADING:
      return {
        ...state,
        isRegisterButtonLoading: action.payload
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errorMessage: []
      };
    default:
      return state;
  }
}
