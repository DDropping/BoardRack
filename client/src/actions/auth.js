import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, TOGGLE_REGISTER_BUTTON_LOADING } from './types';

export const registerUser = ({
  username,
  email,
  password
}) => async dispatch => {
  //Change Register button to loading
  dispatch({ type: TOGGLE_REGISTER_BUTTON_LOADING, payload: true });

  //set headers for request
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  //stringify the form items
  const body = JSON.stringify({ username, email, password });

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
    dispatch({
      type: AUTH_ERROR,
      payload: 'hi'
    });
    dispatch({ type: TOGGLE_REGISTER_BUTTON_LOADING, payload: false });
  }
};
