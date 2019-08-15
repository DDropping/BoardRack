import { combineReducers } from 'redux';
import alert from './alert';
import registerModal from './modals/registerModal';

export default combineReducers({
  alert,
  registerModal
});
