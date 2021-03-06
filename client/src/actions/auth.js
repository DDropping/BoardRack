import axios from 'axios';
import { reset } from 'redux-form';
import setAuthToken from '../util/setAuthToken';
import { successNotification } from '../components/util/Notification';
import {
  AUTH_USER,
  AUTH_USER_FAIL,
  REGISTRATION_ERROR,
  LOGIN_ERROR,
  TOGGLE_REGISTER_BUTTON_LOADING,
  TOGGLE_LOGIN_BUTTON_LOADING,
  CLEAR_ERRORS,
  TOGGLE_REGISTER_MODAL,
  TOGGLE_LOGIN_MODAL,
  TOGGLE_LOGOUT_MODAL,
  CLOSE_NAV_DRAWER,
  USER_LOADED,
  USER_LOADED_SET_LOCATION,
  AUTH_ERROR,
  DEAUTH_USER
} from './types';

/*********** LOAD USER ***********/
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth');
    dispatch({ type: USER_LOADED, payload: res.data });
    if (res.data.location) {
      dispatch({ type: USER_LOADED_SET_LOCATION, payload: res.data.location });
    }
    //extra dispatch to force rerender so navbar can grab user.username
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

/*********** REGISTER USER ***********/
export const registerUser = ({
  username,
  email,
  password,
  confirmPassword
}) => async dispatch => {
  //Clear errors Change Register button to loading
  dispatch({ type: CLEAR_ERRORS });
  dispatch({ type: TOGGLE_REGISTER_BUTTON_LOADING, payload: true });
  //set headers for request
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  //stringify the form items
  const body = JSON.stringify({ username, email, password, confirmPassword });

  //post new account to DB
  try {
    const res = await axios.post('/api/accounts', body, config);

    //successful registration
    dispatch({ type: AUTH_USER, payload: res.data.token });
    dispatch(loadUser());
    dispatch({ type: CLEAR_ERRORS });
    dispatch({ type: TOGGLE_REGISTER_BUTTON_LOADING, payload: false });
    dispatch({ type: TOGGLE_REGISTER_MODAL });
    dispatch({ type: CLOSE_NAV_DRAWER });
    successNotification('Registration Successful!', 'You Are Now Logged In', 3);
    dispatch(reset('register'));
  } catch (e) {
    //failed registration
    const errors = e.response.data.errors;
    if (errors) {
      errors.forEach(error =>
        dispatch({ type: REGISTRATION_ERROR, payload: error.msg })
      );
    }

    dispatch({ type: AUTH_USER_FAIL });
    dispatch({ type: TOGGLE_REGISTER_BUTTON_LOADING, payload: false });
  }
};

/*********** LOGIN USER ***********/
export const loginUser = ({ email, password }) => async dispatch => {
  //Clear errors Change Register button to loading
  dispatch({ type: CLEAR_ERRORS });
  dispatch({ type: TOGGLE_LOGIN_BUTTON_LOADING, payload: true });

  //set headers for request
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  //stringify the form items
  const body = JSON.stringify({ email, password });

  //post new account to DB
  try {
    const res = await axios.post('/api/auth', body, config);

    //successful login
    dispatch({ type: AUTH_USER, payload: res.data.token });
    dispatch(loadUser());
    dispatch({ type: CLEAR_ERRORS });
    dispatch({ type: TOGGLE_LOGIN_BUTTON_LOADING, payload: false });
    dispatch({ type: TOGGLE_LOGIN_MODAL });
    dispatch({ type: CLOSE_NAV_DRAWER });
    successNotification('Login Successful!', 'You Are Now Logged In', 3);
    dispatch(reset('login'));
  } catch (e) {
    //failed login
    const errors = e.response.data.errors;
    if (errors) {
      errors.forEach(error =>
        dispatch({ type: LOGIN_ERROR, payload: error.msg })
      );
    }

    dispatch({ type: AUTH_USER_FAIL });
    dispatch({ type: TOGGLE_LOGIN_BUTTON_LOADING, payload: false });
  }
};

/*********** LOGOUT USER ***********/
export const logoutUser = () => dispatch => {
  dispatch({ type: DEAUTH_USER });
  dispatch({ type: TOGGLE_LOGOUT_MODAL });
  dispatch({ type: CLOSE_NAV_DRAWER });
  successNotification('Logout Successful!', 'You Are Now Logged Out', 3);
};
