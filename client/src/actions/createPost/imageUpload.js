import axios from 'axios';
import imageCompression from 'browser-image-compression';
import {
  OBJECTURL_IMG_URL,
  DEFAULT_IMG_URL,
  THUMBNAIL_IMG_URL,
  INCREASE_IMG_KEY,
  DECREASE_IMG_KEY,
  DELETE_IMG_PREVIEW,
  IMG_UPLOAD_DONE
} from '../types';

//Upload new image, compress to default and thumbnail size, and upload both to AWS S3 bucket
export const uploadImage = (imgKey, uploadedImage) => async dispatch => {
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
    //create objectUrl for upload preview
    dispatch({
      type: OBJECTURL_IMG_URL,
      payload: { imgKey: imgKey, objectUrl: URL.createObjectURL(uploadedImage) }
    });
    dispatch({ type: INCREASE_IMG_KEY });

    //Create compressed file of origional file to standard size
    const compressedFile = await imageCompression(imageFile, standardOptions);
    console.log(
      'compressedFile instanceof Blob',
      compressedFile instanceof Blob
    );
    console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`);

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
    dispatch({
      type: DEFAULT_IMG_URL,
      payload: { imgKey: imgKey, imgDefault: res.data.imageUrl }
    });

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

    //upload thumbnail image to S3 and store image url in redux
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
    dispatch({
      type: THUMBNAIL_IMG_URL,
      payload: { imgKey: imgKey, imgThumbnail: res2.data.imageUrl }
    });
    dispatch({ type: IMG_UPLOAD_DONE, payload: imgKey });
  } catch (err) {
    console.log(err);
    dispatch({ type: DELETE_IMG_PREVIEW, payload: imgKey });
    dispatch({ type: DECREASE_IMG_KEY });
  }
};

export const deleteImagePreview = imgKey => async dispatch => {
  console.log('inside deleteImagePreview action. imgkey: ' + imgKey);
  dispatch({ type: DELETE_IMG_PREVIEW, payload: imgKey });
};
