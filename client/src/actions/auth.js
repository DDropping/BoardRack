import axios from 'axios';
// import { AUTH_USER } from './types';

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

  axios.post('http://localhost:5000/api/accounts', body, config);
};
