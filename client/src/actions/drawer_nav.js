import { TOGGLE_NAV_DRAWER } from './types';

export const toggleNavDrawer = () => dispatch => {
  dispatch({ type: TOGGLE_NAV_DRAWER });
};
