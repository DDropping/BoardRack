import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Button, Form } from 'antd';

import { createPost } from '../../../actions/createPost';

const PublishButton = props => {
  const dispatch = useDispatch();
  const imgList = useSelector(state => state.imgUpload.imgList);
  const isLoading = useSelector(state => state.createPost.isLoading);
  const location = useSelector(state => state.location.location);

  const onSubmit = formProps => {
    dispatch(createPost(formProps, imgList, location));
  };

  const images = imgList.filter(imgs => imgs.isLoading === true);
  const imagesLoading = images.length > 0 ? true : false;

  return (
    <Form onSubmit={props.handleSubmit(onSubmit)}>
      {imagesLoading || location.lat == null || location.lng == null ? (
        <Button htmlType="submit" type="primary" disabled>
          Publish
        </Button>
      ) : (
        <Button htmlType="submit" type="primary" loading={isLoading}>
          Publish
        </Button>
      )}
    </Form>
  );
};

export default reduxForm({ form: 'createPost', destroyOnUnmount: false })(
  PublishButton
);
