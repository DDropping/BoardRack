import React from 'react';

import './postCard.css';

const PostCardImg = ({ post }) => {
  return (
    <div className="br-post-card-img-wrapper">
      <div
        className="br-post-card-img-background"
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
        className="br-post-card-img"
        alt=""
        src={
          post.images[0]
            ? post.images[0].thumbnail
            : process.env.PUBLIC_URL + '/images/br-placeholder-shortboard.png'
        }
      />
    </div>
  );
};

export default PostCardImg;
