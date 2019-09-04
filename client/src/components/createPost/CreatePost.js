import React from 'react';
import { Divider, Row, Col } from 'antd';

import './createPost.css';
import CreatePostForm from './CreatePostForm';

const CreatePost = () => {
  return (
    <div className="wrapper">
      <Divider>
        <h2>Create Post</h2>
      </Divider>
      <Row>
        <Col xs={24} sm={24} md={12}>
          <CreatePostForm />
        </Col>
        <Col xs={24} sm={24} md={12}>
          IMAGES
        </Col>
      </Row>
    </div>
  );
};

export default CreatePost;
