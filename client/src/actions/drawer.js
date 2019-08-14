import { OPEN_DRAWER, CLOSE_DRAWER } from './types';

export const openDrawer = () => dispatch => {
  dispatch({
    type: OPEN_DRAWER,
    payload: { visible: true }
  });
};

export const closeDrawer = () => dispatch => {
  dispatch({
    type: CLOSE_DRAWER,
    payload: { visible: false }
  });
};
