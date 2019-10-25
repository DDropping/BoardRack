import axios from 'axios';

import { LOAD_POSTS, UPDATE_SELECTED_POST, OPEN_POST_MODAL } from '../types';
import { successNotification } from '../../components/util/Notification';

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

  //stringify the form items
  const postid = { id: id };
  const body = JSON.stringify(postid);

  //post new account to DB
  try {
    await axios.put('/api/posts/favorite', body, config);
    successNotification(
      'Post Favorited',
      'This post has been added to your favorites',
      3.5
    );
    //dispatch({ type: PUBISH_LOADING_DONE });
    //CreatePostSuccessNotification();
  } catch (err) {
    if (err) {
      console.log(err);
      //dispatch({ type: PUBISH_LOADING_DONE });
      //CreatePostFailNotification();
    }
  }
};

export const removeFavorite = id => async dispatch => {
  //set headers for request
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  //stringify the form items
  const postid = { id: id };
  const body = JSON.stringify(postid);

  //post new account to DB
  try {
    await axios.put('/api/posts/unFavorite', body, config);
    successNotification(
      'Post Unfavorited',
      'This post has been removed from your favorites',
      3.5
    );
    //dispatch({ type: PUBISH_LOADING_DONE });
    //CreatePostSuccessNotification();
  } catch (err) {
    if (err) {
      console.log(err);
      //dispatch({ type: PUBISH_LOADING_DONE });
      //CreatePostFailNotification();
    }
  }
};
