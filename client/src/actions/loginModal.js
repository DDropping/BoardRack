import { TOGGLE_LOGIN_MODAL } from './types';

export const toggleLoginModal = () => dispatch => {
  dispatch({
    type: TOGGLE_LOGIN_MODAL
  });
};
