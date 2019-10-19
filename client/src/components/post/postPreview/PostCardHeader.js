import React from 'react';
import { Icon } from 'antd';

import '../post.css';

const PostCardHeader = () => {
  return (
    <div className="br-post-card-header">
      <Icon style={{ fontSize: '20px', color: '#00458a' }} type="eye" />
      <Icon
        style={{ fontSize: '20px', color: '#00458a', float: 'right' }}
        type="star"
      />
    </div>
  );
};

export default PostCardHeader;
