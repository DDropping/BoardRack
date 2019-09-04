import React from 'react';
import { Divider, Row, Col, Typography } from 'antd';

import './createPost.css';
import CreatePostForm from './CreatePostForm';

const CreatePost = () => {
  return (
    <div className="wrapper">
      <Divider>
        <Typography.Title level={2} type="secondary">
          Create Post
        </Typography.Title>
      </Divider>
      <Row>
        <Col xs={24} sm={24} md={14}>
          <CreatePostForm />
        </Col>
        <Col xs={24} sm={24} md={10}>
          IMAGES
        </Col>
      </Row>
    </div>
  );
};

export default CreatePost;
