import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './auth';
import alert from './alert';
import registerModal from './modals/registerModal';
import loginModal from './modals/loginModal';
import navDrawer from './drawers/navDrawer';

export default combineReducers({
  form: formReducer,
  auth,
  alert,
  registerModal,
  loginModal,
  navDrawer
});
