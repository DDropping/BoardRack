import React from 'react';

import './createPost/addDetails/imageUpload/imgUpload.css';
import { connect } from 'react-redux';
import PostModal from './post/PostModal';

const Test = props => {
  return (
    <div>
      <PostModal />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    displayLocationForm: state.location.displayLocationForm
  };
};

export default connect(
  mapStateToProps,
  null
)(Test);
