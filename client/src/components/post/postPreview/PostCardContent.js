import React from 'react';

import '../post.css';

const PostCardContent = post => {
  return (
    <div className="br-post-card-content">
      <h3>{post.post.title}</h3>
      6'2" - 19 3/4" - 2 3/8"
    </div>
  );
};

export default PostCardContent;
