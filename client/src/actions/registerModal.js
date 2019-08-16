import { TOGGLE_REGISTER_MODAL, TOGGLE_LOGIN_MODAL } from './types';

export const toggleRegisterModal = () => dispatch => {
  dispatch({
    type: TOGGLE_REGISTER_MODAL
  });
};

export const changeToLoginModal = () => dispatch => {
  dispatch({
    type: TOGGLE_REGISTER_MODAL
  });
  dispatch({
    type: TOGGLE_LOGIN_MODAL
  });
};
