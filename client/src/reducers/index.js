import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import alert from './alert';
import registerModal from './modals/registerModal';
import loginModal from './modals/loginModal';

export default combineReducers({
  formReducer,
  alert,
  registerModal,
  loginModal
});
