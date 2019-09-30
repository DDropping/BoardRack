import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'antd';
import { formValueSelector } from 'redux-form';
import { animateScroll as scroll } from 'react-scroll';

import { clickNext, clickPrevious } from '../../actions/createPost/postSteps';

const CreatePostButtons = props => {
  const nextHandler = () => {
    scroll.scrollToTop();
    props.clickNext();
  };

  const previousHandler = () => {
    scroll.scrollToTop();
    props.clickPrevious();
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
            onClick={previousHandler}
            style={{ marginRight: '5px' }}
            type="primary"
            ghost
          >
            <Icon type="left" />
            Previous
          </Button>
        )}

        {!props.isStepThreeVisible &&
        props.title &&
        props.price &&
        props.boardType &&
        props.condition ? (
          <Button onClick={nextHandler} type="primary" ghost>
            Next
            <Icon type="right" />
          </Button>
        ) : (
          <Button onClick={props.clickNext} type="primary" ghost disabled>
            Next
            <Icon type="right" />
          </Button>
        )}
      </div>
    </div>
  );
};

const selector = formValueSelector('createPost');
const mapStateToProps = state => {
  return {
    isStepOneVisible: state.postSteps.isStepOneVisible,
    isStepTwoVisible: state.postSteps.isStepTwoVisible,
    isStepThreeVisible: state.postSteps.isStepThreeVisible,
    title: selector(state, 'title'),
    price: selector(state, 'price'),
    boardType: selector(state, 'boardType'),
    condition: selector(state, 'condition')
  };
};

export default connect(
  mapStateToProps,
  { clickNext, clickPrevious }
)(CreatePostButtons);
