import React from 'react';
import { connect } from 'react-redux';
import { Steps } from 'antd';

import { changePostStep } from '../../actions/createPost/postSteps';

const { Step } = Steps;

const PostSteps = props => {
  return (
    <div>
      <Steps current={props.currentStep} onChange={props.changePostStep}>
        <Step title="Step 1" description="This is a description." />
        <Step title="Step 2" description="This is a description." />
        <Step title="Step 3" description="This is a description." />
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
