import React from 'react';
import { Modal } from 'antd';

const Post = () => {
  return (
    <div>
      <Modal visible={false} footer={null} onCancel={null}>
        <h1>Post Modal</h1>
      </Modal>
    </div>
  );
};

export default Post;
