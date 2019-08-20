import { TOGGLE_NAV_DRAWER } from './types';

export const toggleNavDrawer = value => dispatch => {
  dispatch({ type: TOGGLE_NAV_DRAWER, payload: value });
};
