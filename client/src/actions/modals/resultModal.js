import {
  OPEN_RESULT_MODAL,
  CLOSE_RESULT_MODAL,
  LOAD_RESULT_MODAL_DATA,
  RESET_RESULT_MODAL_DATA
} from '../types';

export const loadResultModalData = (status, title, subTitle) => dispatch => {
  dispatch({
    type: LOAD_RESULT_MODAL_DATA,
    payload: { status, title, subTitle }
  });
  dispatch({
    type: OPEN_RESULT_MODAL
  });
  setTimeout(() => {
    dispatch({ type: CLOSE_RESULT_MODAL });
  }, 1500);
  setTimeout(() => {
    dispatch({ type: RESET_RESULT_MODAL_DATA });
  }, 3000);
};

export const closeResultModal = () => dispatch => {
  dispatch({ type: CLOSE_RESULT_MODAL });
};
