import axios from 'axios';

import { LOAD_POSTS, POST_VIEWED } from '../types';
import { successNotification } from '../../components/util/Notification';

export const loadPosts = () => async dispatch => {
  try {
    const res = await axios.get('/api/posts');
    dispatch({ type: LOAD_POSTS, payload: res.data });
  } catch (err) {
    console.log(err);
  }
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

  //update post to DB
  try {
    await axios.put('/api/posts/favorite', body, config);
    successNotification(
      'Post Favorited',
      'This post has been added to your favorites',
      3.5
    );
  } catch (err) {
    if (err) {
      console.log(err);
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

  //update post to DB
  try {
    await axios.put('/api/posts/unFavorite', body, config);
    successNotification(
      'Post Unfavorited',
      'This post has been removed from your favorites',
      3.5
    );
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
};

export const addView = id => async dispatch => {
  //set headers for request
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  //stringify the form items
  const postid = { id: id };
  const body = JSON.stringify(postid);

  //update post to DB
  try {
    dispatch({ type: POST_VIEWED, payload: id });
    await axios.put('/api/posts/addView', body, config);
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
};
