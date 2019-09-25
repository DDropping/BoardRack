import React from 'react';
import { connect } from 'react-redux';

import Preview from './PreviewImage';

const PreviewList = props => {
  return (
    <div>
      {props.imgList2.map(preview => (
        <Preview key={preview} previewObjectUrl={preview} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    imgList2: state.imgUpload.imgList2
  };
};

export default connect(
  mapStateToProps,
  null
)(PreviewList);
