import React from 'react';
import { connect } from 'react-redux';

import Preview from './PreviewImage';

const PreviewList = props => {
  return (
    <div>
      {props.previewList.map(preview => (
        <Preview key={preview} previewObjectUrl={preview} />
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
)(PreviewList);
