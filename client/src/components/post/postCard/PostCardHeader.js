import React, { useState, useEffect } from 'react';
import { Icon } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import '../post.css';
import { addFavorite, removeFavorite } from '../../../actions/post/post';

const PostCardHeader = post => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.user);
  const [isFavorite, setFavorite] = useState(false);

  //check if logged in user has favorited this post
  useEffect(() => {
    if (user !== null) {
      if (
        post.post.favorites.filter(favorite => favorite.toString() === user._id)
          .length > 0
      ) {
        setFavorite(true);
      }
    }
  }, [user, isFavorite, post.post.favorites]);

  return (
    <div className="br-post-card-header">
      <strong>${post.post.price}</strong>
      <div style={{ float: 'right' }}>
        <strong>{post.post.viewCount}</strong>

        <Icon
          style={{ fontSize: '20px', color: '#00458a', marginRight: '10px' }}
          type="eye"
        />

        <strong>{post.post.favorites.length}</strong>

        {/* Three options for what star to display below */}
        {isAuthenticated && isFavorite && (
          <Icon
            className="br-post-card-header-star-icon"
            style={{ fontSize: '20px', color: '#00458a' }}
            type="star"
            theme="filled"
            onClick={() => {
              dispatch(removeFavorite(post.post._id));
              setFavorite(false);
            }}
          />
        )}

        {isAuthenticated && !isFavorite && (
          <Icon
            className="br-post-card-header-star-icon"
            style={{ fontSize: '20px', color: '#00458a' }}
            type="star"
            onClick={() => {
              dispatch(addFavorite(post.post._id));
              setFavorite(true);
            }}
          />
        )}

        {!isAuthenticated && (
          <Icon style={{ fontSize: '20px', color: '#00458a' }} type="star" />
        )}
      </div>
    </div>
  );
};

export default PostCardHeader;
