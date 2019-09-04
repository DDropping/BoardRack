import React from 'react';
import { Divider, Row, Col, Typography } from 'antd';

import './createPost.css';
import CreatePostForm from './CreatePostForm';
import PostSteps from './PostSteps';

const CreatePost = () => {
  return (
    <div className="wrapper">
      <Divider>
        <Typography.Title level={2} type="secondary">
          Create Post
        </Typography.Title>
      </Divider>
      <PostSteps />
    </div>
  );
};

export default CreatePost;
