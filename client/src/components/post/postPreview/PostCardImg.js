import React from 'react';

import '../post.css';

const PostCardImg = post => {
  return (
    <div className="br-post-card-img-wrapper">
      <div className="br-post-card-img">
        <img
          className="br-post-card-img"
          alt=""
          src={post.post.images[0].thumbnail}
        />
      </div>
    </div>
  );
};

export default PostCardImg;
