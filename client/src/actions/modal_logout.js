import { TOGGLE_LOGOUT_MODAL } from './types';

export const toggleLogout = () => dispatch => {
  dispatch({
    type: TOGGLE_LOGOUT_MODAL
  });
};
