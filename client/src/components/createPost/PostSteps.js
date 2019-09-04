import React from 'react';
import { connect } from 'react-redux';
import { Steps } from 'antd';

import { changePostStep } from '../../actions/createPost/postSteps';

const { Step } = Steps;

const PostSteps = props => {
  return (
    <div style={{ marginBottom: '40px' }}>
      <Steps
        type="navigation"
        size="small"
        current={props.currentStep}
        onChange={props.changePostStep}
        style={{
          marginBottom: '20px',
          maxWidth: '600px',
          margin: 'auto'
        }}
      >
        <Step title="Start a New Post" />
        <Step title="Additional Details" />
        <Step title="Confirm and Publish" />
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
