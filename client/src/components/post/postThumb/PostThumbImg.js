import React from 'react';

import './postThumb.css';

const PostThumbImg = ({ post }) => {
  return (
    <div className="br-postThumb-img-container">
      <img
        className="br-postThumb-img"
        alt="surfboard"
        src={post.images[0].thumbnail}
      />
    </div>
  );
};

export default PostThumbImg;