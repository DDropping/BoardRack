import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './postCard.css';
import FavoriteCounter from '../FavoriteCounter';
import ViewCounter from '../ViewCounter';

const PostCardHeader = ({ post, isFavorite, setIsFavorite }) => {
  const user = useSelector(state => state.auth.user);

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
