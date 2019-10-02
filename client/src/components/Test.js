import React from 'react';

import './createPost/addDetails/imageUpload/imgUpload.css';
import { connect } from 'react-redux';
import { deleteImagePreview } from '../actions/createPost/imageUpload';

const Test = props => {
  return (
    <div>
      <button>Hello</button>
    </div>
  );
};

export default connect(
  null,
  { deleteImagePreview }
)(Test);
