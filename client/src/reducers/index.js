import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './auth';
import createPost from './createPost/createPost';
import postSteps from './createPost/postSteps';
import imgUpload from './createPost/imgUpload';
import location from './user/location';
import post from './post';
import overlay from './overlay';

export default combineReducers({
  form: formReducer,
  auth,
  createPost,
  postSteps,
  imgUpload,
  location,
  post,
  overlay
});
