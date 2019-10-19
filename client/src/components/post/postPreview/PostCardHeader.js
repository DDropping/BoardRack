import React from 'react';
import { Icon } from 'antd';

import '../post.css';

const PostCardHeader = () => {
  return (
    <div className="br-post-card-header">
      <strong>$250</strong>
      <div style={{ float: 'right' }}>
        14
        <Icon style={{ fontSize: '20px', color: '#00458a' }} type="eye" />
        10
        <Icon style={{ fontSize: '20px', color: '#00458a' }} type="star" />
      </div>
    </div>
  );
};

export default PostCardHeader;
