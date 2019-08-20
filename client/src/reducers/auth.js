import {
  AUTH_USER,
  AUTH_USER_FAIL,
  REGISTRATION_ERROR,
  LOGIN_ERROR,
  CLEAR_ERRORS,
  USER_LOADED,
  AUTH_ERROR,
  DEAUTH_USER
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,

  registrationErrors: [],
  loginErrors: [],
  isRegisterButtonLoading: false,
  isLoginButtonLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload
      };
    case AUTH_USER:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false
      };
    case AUTH_USER_FAIL:
    case AUTH_ERROR:
    case DEAUTH_USER:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null
      };
    case REGISTRATION_ERROR:
      return {
        registrationErrors: [...state.registrationErrors, action.payload]
      };
    case LOGIN_ERROR:
      return {
        loginErrors: [...state.loginErrors, action.payload]
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        registrationErrors: [],
        loginErrors: []
      };
    default:
      return state;
  }
}
