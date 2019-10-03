import React from 'react';

import './createPost/addDetails/imageUpload/imgUpload.css';
import { connect } from 'react-redux';
import { deleteImagePreview } from '../actions/createPost/imageUpload';
import GetLocation from './createPost/addDetails/location/GetLocationButton';

const Test = props => {
  return (
    <div>
      <GetLocation />
    </div>
  );
};

export default connect(
  null,
  { deleteImagePreview }
)(Test);
