import React from 'react';

import './postThumb.css';

const PostThumbImg = ({ post }) => {
  return (
    <div className="br-postThumb-img-container">
      <div
        className="br-postThumb-img-background"
        style={
          post.images[0]
            ? { backgroundImage: 'url(' + post.images[0].thumbnail + ')' }
            : {
                backgroundImage:
                  process.env.PUBLIC_URL +
                  '/images/br-placeholder-shortboard.png'
              }
        }
      />
      <img
        className="br-postThumb-img"
        alt="surfboard"
        src={
          post.images[0]
            ? post.images[0].thumbnail
            : process.env.PUBLIC_URL + '/images/br-placeholder-shortboard.png'
        }
      />
    </div>
  );
};

export default PostThumbImg;
