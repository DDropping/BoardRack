import React from 'react';

import './createPost/addDetails/imageUpload/imgUpload.css';
import { connect } from 'react-redux';
import { deleteImagePreview } from '../actions/createPost/imageUpload';
import GetLocation from './createPost/confirmPost/location/GetLocationButton';
import LocationForm from './createPost/confirmPost/location/LocationForm';
import LocationText from './createPost/confirmPost/location/LocationText';

const Test = props => {
  return (
    <div>
      <GetLocation />
      <LocationText />
      <LocationForm />
    </div>
  );
};

export default connect(
  null,
  { deleteImagePreview }
)(Test);
