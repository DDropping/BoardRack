import React from 'react';

import '../post.css';
import PostCardHeader from './PostCardHeader';
import PostCardContent from './PostCardContent';

const PostCard = () => {
  return (
    <div className="br-post-card-container">
      <PostCardHeader />
      <div className="br-post-card-img">Post img</div>
      <PostCardContent />
    </div>
  );
};

export default PostCard;
