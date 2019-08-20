import { TOGGLE_LOGIN_MODAL, TOGGLE_REGISTER_MODAL } from './types';

export const toggleLoginModal = () => dispatch => {
  dispatch({
    type: TOGGLE_LOGIN_MODAL
  });
};

export const changeToRegisterModal = () => dispatch => {
  dispatch({
    type: TOGGLE_LOGIN_MODAL
  });
  dispatch({
    type: TOGGLE_REGISTER_MODAL
  });
};
