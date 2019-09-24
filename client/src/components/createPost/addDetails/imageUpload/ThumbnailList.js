import React from 'react';
import connect from 'react-redux';

import Thumbnail from './Thumbnail';

const ThumbnailList = () => {
  return (
    <div>
      <div>Thumbnail List</div>
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
)(ThumbnailList);
