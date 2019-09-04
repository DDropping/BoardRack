import React from 'react';
import { connect } from 'react-redux';
import { Steps } from 'antd';

const { Step } = Steps;

const onChange = current => {
  console.log('onChange:', current);
};

const PostSteps = props => {
  return (
    <div>
      <Steps current={props.currentStep} onChange={onChange}>
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
  null
)(PostSteps);
