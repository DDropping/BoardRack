import { TOGGLE_MODAL } from './types';

export const toggleRegisterModal = () => dispatch => {
  dispatch({
    type: TOGGLE_MODAL
  });
};
