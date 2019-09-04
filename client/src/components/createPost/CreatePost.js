import React from 'react';
import { connect } from 'react-redux';

import './createPost.css';
import PostSteps from './PostSteps';
import AddDetails from './AddDetails';
import AdditionalDetails from './AdditionalDetails';
import ConfirmPost from './ConfirmPost';
import CreatePostButtons from './CreatePostButtons';

const CreatePost = props => {
  return (
    <div className="wrapper">
      <PostSteps />

      {props.isStepOneVisible && <AddDetails />}
      {props.isStepTwoVisible && <AdditionalDetails />}
      {props.isStepThreeVisible && <ConfirmPost />}

      <CreatePostButtons />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isStepOneVisible: state.postSteps.isStepOneVisible,
    isStepTwoVisible: state.postSteps.isStepTwoVisible,
    isStepThreeVisible: state.postSteps.isStepThreeVisible
  };
};

export default connect(
  mapStateToProps,
  null
)(CreatePost);
