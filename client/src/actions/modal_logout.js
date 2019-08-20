import { TOGGLE_LOGOUT_MODAL, TOGGLE_LOGOUT_LOADING } from './types';

export const toggleLogoutModal = () => dispatch => {
  dispatch({
    type: TOGGLE_LOGOUT_MODAL
  });
};

export const toggleLogoutLoading = value => dispatch => {
  dispatch({
    type: TOGGLE_LOGOUT_LOADING,
    payload: value
  });
};
