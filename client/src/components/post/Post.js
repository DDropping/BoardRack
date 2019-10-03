import React from 'react';
import { Modal } from 'antd';

import './post.css';

const Post = () => {
  return (
    <div>
      <Modal
        className="br-post-modal"
        bodyStyle={{ height: '100vh' }}
        visible={true}
        footer={null}
        onCancel={null}
      >
        <h1>Post Modal</h1>
      </Modal>
    </div>
  );
};

export default Post;
