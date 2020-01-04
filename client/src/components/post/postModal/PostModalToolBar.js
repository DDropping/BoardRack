import React from 'react';
import { Icon } from 'antd';

const PostModalToolBar = ({ post, hidePostModal }) => {
  return (
    <div>
      <Icon
        type="close-circle"
        onClick={() => hidePostModal()}
        style={{
          fontSize: '25px',
          position: 'absolute',
          right: 5,
          top: 5
        }}
      />
    </div>
  );
};

export default PostModalToolBar;
