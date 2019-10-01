import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import { Button, Form } from 'antd';

import { createPost } from '../../../actions/createPost';

const PublishButton = props => {
  const onSubmit = formProps => {
    props.createPost(formProps, props.imgList);
  };

  const images = props.imgList.filter(imgs => imgs.isLoading === true);
  const imagesLoading = images.length > 0 ? true : false;

  return (
    <div>
      <Form onSubmit={props.handleSubmit(onSubmit)}>
        {imagesLoading ? (
          <Button
            htmlType="submit"
            onSubmit={props.handleSubmit(onSubmit)}
            type="primary"
            disabled
          >
            Publish
          </Button>
        ) : (
          <Button
            htmlType="submit"
            onSubmit={props.handleSubmit(onSubmit)}
            type="primary"
          >
            Publish
          </Button>
        )}
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
    { createPost }
  ),
  reduxForm({ form: 'createPost', destroyOnUnmount: false })
)(PublishButton);
