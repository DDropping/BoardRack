import axios from 'axios';
import imageCompression from 'browser-image-compression';
import {
  ADD_IMG_URL_TO_STORE,
  ADD_THUMBNAIL_URL_TO_STORE,
  IMAGE_UPLOADING_TRUE,
  IMAGE_UPLOADING_FALSE
} from '../types';

export const uploadImage = uploadedImage => async dispatch => {
  console.log('In upload action...');

  //compress image options
  const thumbnailOptions = {
    maxSizeMB: 0.005,
    //maxWidthOrHeight: 500,
    useWebWorker: true
  };

  const standardOptions = {
    maxSizeMB: 0.1,
    useWebWorker: true
  };

  const imageFile = uploadedImage;
  console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
  console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

  try {
    //Create compressed file of origional file to standard size
    dispatch({ type: IMAGE_UPLOADING_TRUE });
    const compressedFile = await imageCompression(imageFile, standardOptions);
    console.log(
      'compressedFile instanceof Blob',
      compressedFile instanceof Blob
    );
    console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`);

    //Create compressed file of standard file to thumbnail size
    const compressedThumbnail = await imageCompression(
      compressedFile,
      thumbnailOptions
    );
    console.log(
      'compressedFile instanceof Blob',
      compressedFile instanceof Blob
    );
    console.log(
      `compressedFile size ${compressedThumbnail.size / 1024 / 1024} MB`
    );

    //upload standardized image to S3 and store image url in redux
    const fd = new FormData();
    fd.append('image', compressedFile, compressedFile.name);
    const res = await axios.post('api/upload', fd, {
      onUploadProgress: progressEvent => {
        console.log(
          'Upload Progress Standard: ' +
            Math.round((progressEvent.loaded / progressEvent.total) * 100) +
            '%'
        );
      }
    });
    dispatch({ type: ADD_IMG_URL_TO_STORE, payload: res.data.imageUrl });

    //upload standardized image to S3 and store image url in redux
    const fd2 = new FormData();
    fd2.append('image', compressedThumbnail, compressedThumbnail.name);
    const res2 = await axios.post('api/upload', fd2, {
      onUploadProgress: progressEvent => {
        console.log(
          'Upload Progress Thumbnail: ' +
            Math.round((progressEvent.loaded / progressEvent.total) * 100) +
            '%'
        );
      }
    });
    dispatch({ type: ADD_THUMBNAIL_URL_TO_STORE, payload: res2.data.imageUrl });
    dispatch({ type: IMAGE_UPLOADING_FALSE });
  } catch (err) {
    console.log(err);
    dispatch({ type: IMAGE_UPLOADING_FALSE });
  }
};
