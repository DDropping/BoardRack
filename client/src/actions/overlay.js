import {
  TOGGLE_NAV_DRAWER,
  TOGGLE_REGISTER_MODAL,
  TOGGLE_LOGIN_MODAL,
  TOGGLE_LOGOUT_MODAL,
  TOGGLE_LOGOUT_LOADING
} from './types';

export const toggleNavDrawer = value => dispatch => {
  dispatch({ type: TOGGLE_NAV_DRAWER, payload: value });
};

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
