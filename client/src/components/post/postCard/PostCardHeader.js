import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import '../post.css';
import FavoriteCounter from '../FavoriteCounter';
import ViewCounter from '../ViewCounter';

const PostCardHeader = ({ post }) => {
  const user = useSelector(state => state.auth.user);
  const [isFavorite, setFavorite] = useState(false);

  //check if logged in user has favorited this post
  useEffect(() => {
    if (user !== null) {
      if (
        post.favorites.filter(favorite => favorite.toString() === user._id)
          .length > 0
      ) {
        setFavorite(true);
      }
    }
  }, [user, isFavorite, post.favorites]);

  return (
    <div className="br-post-card-header">
      <strong>${post.price}</strong>
      <div style={{ float: 'right' }}>
        <ViewCounter viewCount={post.viewCount} />
        <FavoriteCounter favorites={post.favorites} _id={post._id} />
      </div>
    </div>
  );
};

export default PostCardHeader;
