import React from 'react';

import '../post.css';
import PostCardHeader from './PostCardHeader';
import PostCardImg from './PostCardImg';
import PostCardContent from './PostCardContent';

const PostCard = post => {
  return (
    <div className="br-post-card-container">
      <PostCardHeader post={post.post} />
      <PostCardImg post={post.post} />
      <PostCardContent post={post.post} />
    </div>
  );
};

export default PostCard;
