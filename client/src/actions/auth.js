import axios from 'axios';
import { AUTH_USER } from './types';

export const registerUser = ({
  username,
  email,
  password
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ username, email, password });

  const response = await axios.post(
    'http://localhost:5000/api/accounts',
    body,
    config
  );

  dispatch({ type: AUTH_USER, payload: response.data.token });
};
