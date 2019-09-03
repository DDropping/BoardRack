import React from 'react';
import { Divider } from 'antd';

import './createPost.css';
import CreatePostForm from './CreatePostForm';

const CreatePost = () => {
  return (
    <div className="wrapper">
      <Divider>
        <h2>Create Post</h2>
      </Divider>
      <CreatePostForm />
    </div>
  );
};

export default CreatePost;
