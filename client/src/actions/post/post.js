import axios from 'axios';

import { LOAD_POSTS, UPDATE_SELECTED_POST, OPEN_POST_MODAL } from '../types';

export const loadPosts = () => async dispatch => {
  try {
    const res = await axios.get('/api/posts');
    dispatch({ type: LOAD_POSTS, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const selectPost = post => dispatch => {
  dispatch({ type: UPDATE_SELECTED_POST, payload: post });
  dispatch({ type: OPEN_POST_MODAL });
};
