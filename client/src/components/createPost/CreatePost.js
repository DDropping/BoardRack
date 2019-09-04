import React from 'react';
import { connect } from 'react-redux';
import { Divider, Row, Col, Typography } from 'antd';

import './createPost.css';
import CreatePostForm from './CreatePostForm';
import PostSteps from './PostSteps';
import AddDetails from './AddDetails';
import AdditionalDetails from './AdditionalDetails';
import ConfirmPost from './ConfirmPost';

const CreatePost = props => {
  return (
    <div className="wrapper">
      <Divider>
        <Typography.Title level={2} type="secondary">
          Create Post
        </Typography.Title>
      </Divider>
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
