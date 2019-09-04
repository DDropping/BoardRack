import React from 'react';
import { connect } from 'react-redux';
import { Divider, Typography } from 'antd';

import './createPost.css';
import PostSteps from './PostSteps';
import AddDetails from './AddDetails';
import AdditionalDetails from './AdditionalDetails';
import ConfirmPost from './ConfirmPost';

const CreatePost = props => {
  return (
    <div className="wrapper">
      <PostSteps />

      {props.isStepOneVisible && <AddDetails />}
      {props.isStepTwoVisible && <AdditionalDetails />}
      {props.isStepThreeVisible && <ConfirmPost />}
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
