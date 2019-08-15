import { TOGGLE_REGISTER_MODAL } from './types';

export const toggleRegisterModal = () => dispatch => {
  dispatch({
    type: TOGGLE_REGISTER_MODAL
  });
};
