import {
  AUTH_USER,
  REGISTRATION_ERROR,
  TOGGLE_REGISTER_BUTTON_LOADING,
  CLEAR_ERRORS
} from '../actions/types';

const INITIAL_STATE = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  user: null,
  registrationErrors: [],
  isRegisterButtonLoading: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        authenticated: action.payload
      };
    case REGISTRATION_ERROR:
      return {
        registrationErrors: [...state.registrationErrors, action.payload]
      };
    case TOGGLE_REGISTER_BUTTON_LOADING:
      return {
        ...state,
        isRegisterButtonLoading: action.payload
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        registrationErrors: []
      };
    default:
      return state;
  }
}
