import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import { Button, Form } from 'antd';

const ConfirmPost = props => {
  const onSubmit = formProps => {
    console.log(formProps);
    console.log(props.imgList);
  };
  return (
    <div>
      <Form onSubmit={props.handleSubmit(onSubmit)}>
        <Button
          htmlType="submit"
          onSubmit={props.handleSubmit(onSubmit)}
          type="primary"
        >
          Publish
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    imgList: state.imgUpload.imgList
  };
};

export default compose(
  connect(
    mapStateToProps,
    null
  ),
  reduxForm({ form: 'createPost', destroyOnUnmount: false })
)(ConfirmPost);
