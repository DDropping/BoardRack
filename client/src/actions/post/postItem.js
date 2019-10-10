import { OPEN_POST_MODAL, CLOSE_POST_MODAL } from '../types';

export const openPostModal = () => dispatch => {
  console.log('post modal action');

  dispatch({ type: OPEN_POST_MODAL });
};

export const closePostModal = () => dispatch => {
  dispatch({ type: CLOSE_POST_MODAL });
};
