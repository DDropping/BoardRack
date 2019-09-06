import React from 'react';
import { connect } from 'react-redux';

import './createPost.css';
import PostSteps from './PostSteps';
import AddDetails from './addDetails/AddDetails';
import AdditionalDetails from './additionalDetails/AdditionalDetails';
import ConfirmPost from './confirmPost/ConfirmPost';
import CreatePostButtons from './CreatePostButtons';

const CreatePost = props => {
  return (
    <div className="wrapper">
      <div className="showSteps">
        <PostSteps />
      </div>

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
