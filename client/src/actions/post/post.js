import axios from 'axios';

import { LOAD_POSTS } from '../types';

export const loadPosts = () => async dispatch => {
  const res = await axios.get('/api/posts');
  dispatch({ type: LOAD_POSTS, payload: res.data });
  console.log(res.data);
};
