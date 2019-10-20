import React from 'react';
import { Icon } from 'antd';

import '../post.css';

const PostCardHeader = post => {
  return (
    <div className="br-post-card-header">
      <strong>${post.post.price}</strong>
      <div style={{ float: 'right' }}>
        <strong>14</strong>
        <Icon
          style={{ fontSize: '20px', color: '#00458a', marginRight: '10px' }}
          type="eye"
        />
        <strong>11</strong>
        <Icon
          className="br-post-card-header-star-icon"
          style={{ fontSize: '20px', color: '#00458a' }}
          type="star"
        />
      </div>
    </div>
  );
};

export default PostCardHeader;
