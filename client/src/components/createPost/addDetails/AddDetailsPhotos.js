import React from 'react';

import ImageUpload from './imageUpload/ImageUpload';
import ThumbnailList from './imageUpload/ThumbnailList';

const AddDetailsPhotos = () => {
  return (
    <div>
      <ImageUpload />
      <ThumbnailList />
    </div>
  );
};

export default AddDetailsPhotos;
