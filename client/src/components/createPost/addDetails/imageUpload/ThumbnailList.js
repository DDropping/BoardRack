import React from 'react';
import { connect } from 'react-redux';

import Thumbnail from './Thumbnail';

const ThumbnailList = props => {
  return (
    <div>
      <div>Thumbnail List</div>
      {props.imgList.map(img => (
        <div key={img}>
          <Thumbnail thumbnailUrl={img} />
        </div>
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
