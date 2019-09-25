import React from 'react';
import { connect } from 'react-redux';

import Preview from './PreviewImage';
import ImageUploadButton from './ImageUploadButton';

const PreviewList = props => {
  return (
    <div
      style={{
        display: 'inline-block'
      }}
    >
      {props.imgList.map(preview => (
        <Preview key={preview.imgKey} previewObjectUrl={preview.objectUrl} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    imgList: state.imgUpload.imgList
  };
};

export default connect(
  mapStateToProps,
  null
)(PreviewList);
