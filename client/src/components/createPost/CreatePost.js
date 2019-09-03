import React from 'react';
import { Divider } from 'antd';

import { AInput, ASelect, ACheckbox } from '../formAntComponents';
import './createPost.css';

const CreatePost = () => {
  return (
    <div className="wrapper">
      <Divider>
        <h2>Create Post</h2>
      </Divider>
    </div>
  );
};

export default CreatePost;
