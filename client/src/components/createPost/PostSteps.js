import React from 'react';
import { connect } from 'react-redux';
import { Steps } from 'antd';

import { changePostStep } from '../../actions/createPost/postSteps';

const { Step } = Steps;

const PostSteps = props => {
  return (
    <div>
      <Steps
        type="navigation"
        size="default"
        current={props.currentStep}
        onChange={props.changePostStep}
        style={{ marginBottom: '20px' }}
      >
        <Step title="Start a New Post" description="Add photos and details" />
        <Step
          title="Additional Details"
          description="Add more details to help your post be seen"
        />
        <Step
          title="Confirm and Publish"
          description="Publish your post to the world"
        />
      </Steps>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentStep: state.postSteps.currentStep
  };
};

export default connect(
  mapStateToProps,
  { changePostStep }
)(PostSteps);
