import React from 'react';

import '../post.css';
import PostCardHeader from './PostCardHeader';

const PostCard = () => {
  return (
    <div className="br-post-card-container">
      <PostCardHeader />
      <div className="br-post-card-img">Post img</div>
      <div className="br-post-card-content">Post Card content</div>
    </div>
  );
};

export default PostCard;
