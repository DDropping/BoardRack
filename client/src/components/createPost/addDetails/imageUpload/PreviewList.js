import React from 'react';
import { useSelector } from 'react-redux';

import Preview from './PreviewImage';
import ImageUploadButton from './ImageUploadButton';

const PreviewList = () => {
  const imgList = useSelector(state => state.imgUpload.imgList);

  return (
    <div
      style={{
        display: 'inline-block'
      }}
    >
      <ImageUploadButton />
      {imgList.map(preview => (
        <Preview
          key={preview.imgKey}
          previewObjectUrl={preview.objectUrl}
          imgKey={preview.imgKey}
        />
      ))}
    </div>
  );
};

export default PreviewList;
