import { UPLOAD_IMAGE } from '../types';

export const uploadImage = imageURL => dispatch => {
  dispatch({ type: UPLOAD_IMAGE, payload: imageURL });
};
