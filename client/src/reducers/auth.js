import {
  AUTH_USER,
  AUTH_USER_FAIL,
  ADD_AUTH_ERROR,
  TOGGLE_AUTH_LOADING,
  CLEAR_ERRORS,
  USER_LOADED,
  AUTH_ERROR
} from '../actions/types';

const INITIAL_STATE = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,

  registrationErrors: [],
  isRegisterButtonLoading: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload
      };
    case AUTH_USER:
      console.log('setting token in local storage');
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false
      };
    case AUTH_USER_FAIL:
    case AUTH_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      };
    case ADD_AUTH_ERROR:
      return {
        registrationErrors: [...state.registrationErrors, action.payload]
      };
    case TOGGLE_AUTH_LOADING:
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
