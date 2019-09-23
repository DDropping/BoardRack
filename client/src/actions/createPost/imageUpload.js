import axios from 'axios';
import imageCompression from 'browser-image-compression';
import { ADD_IMG_URL_TO_STORE } from '../types';

export const uploadImage = uploadedImage => async dispatch => {
  console.log('In upload action...');

  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1200,
    useWebWorker: true
  };

  const imageFile = uploadedImage;
  console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
  console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

  try {
    const compressedFile = await imageCompression(imageFile, options);
    console.log(
      'compressedFile instanceof Blob',
      compressedFile instanceof Blob
    ); // true
    console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`);

    const fd = new FormData();
    fd.append('image', compressedFile, compressedFile.name);
    const res = await axios.post('api/upload', fd, {
      onUploadProgress: progressEvent => {
        console.log(
          'Upload Progress: ' +
            Math.round((progressEvent.loaded / progressEvent.total) * 100) +
            '%'
        );
      }
    });
    dispatch({ type: ADD_IMG_URL_TO_STORE, payload: res.data.imageUrl });
  } catch (err) {
    console.log(err);
  }
};