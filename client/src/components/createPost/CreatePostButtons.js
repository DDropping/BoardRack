import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'antd';

import { clickNext, clickPrevious } from '../../actions/createPost/postSteps';

const CreatePostButtons = props => {
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
        {props.isStepThreeVisible && <Button type="primary">Publish</Button>}
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

export default connect(
  mapStateToProps,
  { clickNext, clickPrevious }
)(CreatePostButtons);
