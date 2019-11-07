import React from 'react';

import '../post.css';

const PostCardImg = post => {
  return (
    <div className="br-post-card-img-wrapper">
      <img
        className="br-post-card-img"
        alt=""
        src={post.post.images[0].thumbnail}
      />
    </div>
  );
};

export default PostCardImg;
