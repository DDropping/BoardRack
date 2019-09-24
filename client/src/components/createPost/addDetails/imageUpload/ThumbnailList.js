import React from 'react';
import { connect } from 'react-redux';

import Thumbnail from './Thumbnail';

const ThumbnailList = props => {
  return (
    <div>
      {props.thumbnailList.map(thumbnail => (
        <Thumbnail key={thumbnail} thumbnailUrl={thumbnail} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    thumbnailList: state.imgUpload.thumbnailList
  };
};

export default connect(
  mapStateToProps,
  null
)(ThumbnailList);
