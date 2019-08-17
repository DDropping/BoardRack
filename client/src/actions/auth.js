import axios from 'axios';
import { AUTH_USER } from './types';

export const registerUser = formProps => dispatch => {
  axios.post('http://localhost:5000/api/accounts', {
    formProps
  });
};
