import React from 'react';
import { Icon } from 'antd';

import './postModal.css';

const PostModalToolBar = ({ post, hidePostModal }) => {
  return (
    <div className="br-post-modal-toolbar-wrapper">
      <div className="br-post-modal-toolbar">
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
    </div>
  );
};

export default PostModalToolBar;
