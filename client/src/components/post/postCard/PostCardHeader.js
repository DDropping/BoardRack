import React from 'react';

import './postCard.css';
import FavoriteCounter from '../FavoriteCounter';
import ViewCounter from '../ViewCounter';

const PostCardHeader = ({ post, isFavorite, setIsFavorite }) => {
  return (
    <div className="br-post-card-header">
      <strong>${post.price}</strong>
      <div style={{ float: 'right' }}>
        <ViewCounter viewCount={post.viewCount} />
        <FavoriteCounter
          favorites={post.favorites}
          _id={post._id}
          isFavorite={isFavorite}
          setIsFavorite={setIsFavorite}
        />
      </div>
    </div>
  );
};

export default PostCardHeader;
