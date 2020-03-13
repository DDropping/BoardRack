import axios from 'axios';
import { reset } from 'redux-form';
import {
  successNotification,
  failNotification
} from '../../components/util/Notification';
import {
  PUBLISH_LOADING,
  PUBISH_LOADING_DONE,
  EMPTY_IMGLIST,
  REDIRECT_TO_HOME
} from '../types';

// UPLOAD NEW POST TO DB
export const createPost = (formProps, imgList, location) => async dispatch => {
  dispatch({ type: PUBLISH_LOADING });
  const images = imgList.map(obj => {
    return {
      thumbnail: obj.imgThumbnail,
      default: obj.imgDefault
    };
  });

  const postItems = formProps;
  postItems.images = images;
  postItems.location = {};
  postItems.location.lat = location.lat;
  postItems.location.lng = location.lng;
  postItems.location.country = location.country;
  postItems.location.state = location.state;
  postItems.location.city = location.city;
  postItems.location.postalCode = location.postalCode;
  postItems.location.locationImage = location.locationImage;

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
    await axios.post('/api/posts', body, config);
    dispatch({ type: PUBISH_LOADING_DONE });
    successNotification(
      'New Post Created!',
      'Your Post Has Been Created And Is Live For The World To See',
      4.5
    );
  } catch (err) {
    if (err) {
      console.log(err);
      dispatch({ type: PUBISH_LOADING_DONE });
      failNotification(
        'Uhh Ohh, Something Went Wrong',
        'Sorry, Your Post Could Not Be Created At This Time',
        4.5
      );
    }
  }
};

export const cancelCreatePost = () => dispatch => {
  dispatch(reset('createPost'));
  dispatch({ type: EMPTY_IMGLIST });
  dispatch({ type: REDIRECT_TO_HOME });
};
