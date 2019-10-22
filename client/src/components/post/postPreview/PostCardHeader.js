import React from 'react';
import { Icon } from 'antd';
import { useDispatch } from 'react-redux';

import '../post.css';
import { addFavorite } from '../../../actions/post/post';

const PostCardHeader = post => {
  const dispatch = useDispatch();
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
          onClick={() => dispatch(addFavorite(post.post._id))}
        />
      </div>
    </div>
  );
};

export default PostCardHeader;
