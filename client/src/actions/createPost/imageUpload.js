import axios from 'axios';
import { ADD_IMG_URL_TO_STORE } from '../types';

export const uploadImage = uploadedImage => async dispatch => {
  const fd = new FormData();
  fd.append('image', uploadedImage, uploadedImage.name);
  const res = await axios.post('api/upload', fd, {
    onUploadProgress: progressEvent => {
      console.log(
        'Upload Progress: ' +
          Math.round((progressEvent.loaded / progressEvent.total) * 100) +
          '%'
      );
    }
  });
  console.log(res.data.imageUrl);
  dispatch({ type: ADD_IMG_URL_TO_STORE, payload: res.data.imageUrl });
};
