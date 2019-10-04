import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './auth';
import registerModal from './modals/registerModal';
import loginModal from './modals/loginModal';
import logoutModal from './modals/logoutModal';
import navDrawer from './drawers/navDrawer';
import resultModal from './modals/resultModal';
import createPost from './createPost/createPost';
import postSteps from './createPost/postSteps';
import imgUpload from './createPost/imgUpload';
import location from './user/location';

export default combineReducers({
  form: formReducer,
  auth,
  registerModal,
  loginModal,
  navDrawer,
  logoutModal,
  resultModal,
  createPost,
  postSteps,
  imgUpload,
  location
});
