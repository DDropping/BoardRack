import { OPEN_MODAL, CLOSE_MODAL, TOGGLE_MODAL } from './types';

export const openModal = () => dispatch => {
  dispatch({
    type: OPEN_MODAL
  });
};

export const closeModal = () => dispatch => {
  dispatch({
    type: CLOSE_MODAL
  });
};

export const toggleModal = modal_id => dispatch => {
  dispatch({
    type: TOGGLE_MODAL,
    payload: modal_id
  });
};
