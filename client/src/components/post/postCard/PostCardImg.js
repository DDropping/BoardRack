import React from 'react';

import './postCard.css';

const PostCardImg = ({ post }) => {
  return (
    <div className="br-post-card-img-wrapper">
      <div
        className="br-post-card-img-background"
        style={{ backgroundImage: 'url(' + post.images[0].thumbnail + ')' }}
      />
      <img className="br-post-card-img" alt="" src={post.images[0].thumbnail} />
    </div>
  );
};

export default PostCardImg;
