import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import { Button, Form } from 'antd';

const ConfirmPost = props => {
  const onSubmit = formProps => {
    console.log(formProps);
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

export default compose(
  connect(
    null,
    null
  ),
  reduxForm({ form: 'createPost', destroyOnUnmount: false })
)(ConfirmPost);
