import axios from 'axios';
import {
  AUTH_USER,
  AUTH_ERROR,
  TOGGLE_REGISTER_BUTTON_LOADING,
  CLEAR_ERRORS
} from './types';

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
    const response = await axios.post(
      'http://localhost:5000/api/accounts',
      body,
      config
    );

    dispatch({ type: AUTH_USER, payload: response.data.token });
    dispatch({ type: TOGGLE_REGISTER_BUTTON_LOADING, payload: false });
  } catch (e) {
    const errors = e.response.data.errors;
    if (errors) {
      errors.forEach(error =>
        dispatch({ type: AUTH_ERROR, payload: error.msg })
      );
    }

    dispatch({ type: TOGGLE_REGISTER_BUTTON_LOADING, payload: false });
  }
};
