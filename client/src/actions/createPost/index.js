import axios from 'axios';
import {
  CreatePostSuccessNotification,
  CreatePostFailNotification
} from '../../components/util/Notification';
import { PUBLISH_LOADING, PUBISH_LOADING_DONE } from '../types';

export const createPost = (formProps, imgList) => async dispatch => {
  dispatch({ type: PUBLISH_LOADING });
  const images = imgList.map(obj => {
    return {
      thumbnail: obj.imgThumbnail,
      default: obj.imgDefault
    };
  });

  const postItems = formProps;
  postItems.images = images;

  //set headers for request
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  //stringify the form items
  const body = JSON.stringify(postItems);

  //post new account to DB
  try {
    console.log(body);
    const res = await axios.post('/api/posts', body, config);
    console.log(res);
    dispatch({ type: PUBISH_LOADING_DONE });
    CreatePostSuccessNotification();
  } catch (err) {
    if (err) {
      console.log(err);
      dispatch({ type: PUBISH_LOADING_DONE });
      CreatePostFailNotification();
    }
  }
};
