import React from 'react';

import '../post.css';
import PostCardHeader from './PostCardHeader';
import PostCardImg from './PostCardImg';
import PostCardContent from './PostCardContent';

const PostCard = () => {
  return (
    <div className="br-post-card-container">
      <PostCardHeader />
      <PostCardImg />
      <PostCardContent />
    </div>
  );
};

export default PostCard;
