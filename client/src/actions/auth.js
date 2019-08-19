import axios from 'axios';
import setAuthToken from '../util/setAuthToken';
import {
  AUTH_USER,
  //AUTH_USER_FAIL,
  REGISTRATION_ERROR,
  TOGGLE_REGISTER_BUTTON_LOADING,
  CLEAR_ERRORS,
  TOGGLE_REGISTER_MODAL,
  USER_LOADED,
  AUTH_ERROR
} from './types';

export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('http://localhost:5000/api/auth');

    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

// Register a user
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
    const res = await axios.post(
      'http://localhost:5000/api/accounts',
      body,
      config
    );

    localStorage.setItem('token', res.data.token);

    //successful registration
    dispatch({ type: AUTH_USER, payload: res.data.token });
    dispatch({ type: CLEAR_ERRORS });
    dispatch({ type: TOGGLE_REGISTER_BUTTON_LOADING, payload: false });
    dispatch({ type: TOGGLE_REGISTER_MODAL });
  } catch (e) {
    //failed registration
    const errors = e.response.data.errors;
    if (errors) {
      errors.forEach(error =>
        dispatch({ type: REGISTRATION_ERROR, payload: error.msg })
      );
    }

    dispatch({ type: TOGGLE_REGISTER_BUTTON_LOADING, payload: false });
  }
};
