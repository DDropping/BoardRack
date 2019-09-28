import React from 'react';
import { connect } from 'react-redux';
import { Steps } from 'antd';
import { formValueSelector } from 'redux-form';

import { changePostStep } from '../../actions/createPost/postSteps';

const { Step } = Steps;

const PostSteps = props => {
  return (
    <div style={{ marginBottom: !props.isStepThreeVisible ? '0' : '40px' }}>
      <Steps
        type="navigation"
        size="large"
        current={props.currentStep}
        onChange={
          props.title &&
          props.price &&
          props.boardType &&
          props.condition &&
          props.changePostStep
        }
        style={{
          maxWidth: '700px',
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

const selector = formValueSelector('createPost');
const mapStateToProps = state => {
  return {
    currentStep: state.postSteps.currentStep,
    isStepThreeVisible: state.postSteps.isStepThreeVisible,
    title: selector(state, 'title'),
    price: selector(state, 'price'),
    boardType: selector(state, 'boardType'),
    condition: selector(state, 'condition')
  };
};

export default connect(
  mapStateToProps,
  { changePostStep }
)(PostSteps);
