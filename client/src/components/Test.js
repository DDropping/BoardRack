import React from 'react';

import './createPost/addDetails/imageUpload/imgUpload.css';
import { connect } from 'react-redux';
import { deleteImagePreview } from '../actions/createPost/imageUpload';
import GetLocation from './createPost/addDetails/location/GetLocationButton';
import Location from './createPost/confirmPost/Location';

const Test = props => {
  return (
    <div>
      <Location />
      <GetLocation />
    </div>
  );
};

export default connect(
  null,
  { deleteImagePreview }
)(Test);
