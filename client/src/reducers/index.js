import { combineReducers } from 'redux';
import alert from './alert';
import registerModal from './modals/registerModal';
import loginModal from './modals/loginModal';

export default combineReducers({
  alert,
  registerModal,
  loginModal
});
