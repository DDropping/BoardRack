import axios from 'axios';

import { LOAD_POSTS } from '../types';

export const loadPosts = () => async dispatch => {
  try {
    const res = await axios.get('/api/posts');
    dispatch({ type: LOAD_POSTS, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};
