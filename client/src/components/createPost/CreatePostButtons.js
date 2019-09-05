import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import { Button, Icon, Form } from 'antd';

import { clickNext, clickPrevious } from '../../actions/createPost/postSteps';

const CreatePostButtons = props => {
  const onSubmit = formProps => {
    console.log(formProps);
  };
  return (
    <div
      style={{
        maxWidth: '750px',
        paddingTop: '20px',
        margin: '0 auto'
      }}
    >
      <Button type="danger" ghost>
        Cancel
      </Button>
      <div style={{ float: 'right' }}>
        {!props.isStepOneVisible && (
          <Button
            onClick={props.clickPrevious}
            style={{ marginRight: '5px' }}
            type="primary"
            ghost
          >
            <Icon type="left" />
            Previous
          </Button>
        )}
        {!props.isStepThreeVisible && (
          <Button onClick={props.clickNext} type="primary" ghost>
            Next
            <Icon type="right" />
          </Button>
        )}
      </div>
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

export default compose(
  connect(
    mapStateToProps,
    { clickNext, clickPrevious }
  ),
  reduxForm({ form: 'createPost', destroyOnUnmount: false })
)(CreatePostButtons);
