import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import '../post.css';
import PostCardHeader from './PostCardHeader';
import PostCardImg from './PostCardImg';
import PostCardContent from './PostCardContent';

const PostCard = post => {
  const user = useSelector(state => state.auth.user);
  const isFavorite = false;

  useEffect(() => checkFavorite(user), []);

  const checkFavorite = user => {
    if (user !== null) {
      if (
        post.post.favorites.filter(
          favorite => favorite.user.toString() === user._id
        ).length > 0
      ) {
        isFavorite = true;
      }
    }
  };
  return (
    <div className="br-post-card-container">
      <PostCardHeader post={post.post} isFavoriteInitalValue={isFavorite} />
      <PostCardImg post={post.post} />
      <PostCardContent post={post.post} />
    </div>
  );
};

export default PostCard;
