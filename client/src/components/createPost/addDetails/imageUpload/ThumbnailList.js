import React from 'react';
import { connect } from 'react-redux';

import Thumbnail from './Thumbnail';

const ThumbnailList = props => {
  return (
    <div>
      {props.previewList.map(thumbnail => (
        <Thumbnail key={thumbnail} thumbnailUrl={thumbnail} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    previewList: state.imgUpload.previewList
  };
};

export default connect(
  mapStateToProps,
  null
)(ThumbnailList);
