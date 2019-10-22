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

export const addFavorite = id => async dispatch => {
  //set headers for request
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const postid = { id: id };
  //stringify the form items
  const body = JSON.stringify(postid);

  //post new account to DB
  try {
    console.log('about to send req');
    await axios.put('/api/posts/favorite', body, config);
    console.log('Sent request');
    //dispatch({ type: PUBISH_LOADING_DONE });
    //CreatePostSuccessNotification();
  } catch (err) {
    if (err) {
      console.log('error occured');
      console.log(err);
      //dispatch({ type: PUBISH_LOADING_DONE });
      //CreatePostFailNotification();
    }
  }
};
