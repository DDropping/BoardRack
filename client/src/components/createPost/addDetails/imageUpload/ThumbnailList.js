import React from 'react';
import { connect } from 'react-redux';

import Thumbnail from './Thumbnail';

const ThumbnailList = props => {
  return (
    <div>
      {props.imgList.map(img => (
        <Thumbnail key={img} thumbnailUrl={img} />
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
)(ThumbnailList);
