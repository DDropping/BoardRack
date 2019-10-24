import React, { useState, useEffect } from 'react';
import { Icon } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import '../post.css';
import { addFavorite, removeFavorite } from '../../../actions/post/post';

const PostCardHeader = post => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const [isFavorite, setFavorite] = useState(false);

  //check if logged in user has favorited this post
  useEffect(() => {
    if (user !== null) {
      console.log('user is logged in.');
      if (
        post.post.favorites.filter(
          favorite => favorite.user.toString() === user._id
        ).length > 0
      ) {
        console.log('User has favorited this post');
        setFavorite(true);
        console.log(isFavorite);
      }
    }
  }, [user, isFavorite, post.post.favorites]);

  return (
    <div className="br-post-card-header">
      <strong>${post.post.price}</strong>
      <div style={{ float: 'right' }}>
        <strong>14</strong>
        <Icon
          style={{ fontSize: '20px', color: '#00458a', marginRight: '10px' }}
          type="eye"
        />
        <strong>11</strong>
        {isFavorite ? (
          <Icon
            className="br-post-card-header-star-icon"
            style={{ fontSize: '20px', color: '#00458a' }}
            type="star"
            theme="filled"
            onClick={() => dispatch(removeFavorite(post.post._id))}
          />
        ) : (
          <Icon
            className="br-post-card-header-star-icon"
            style={{ fontSize: '20px', color: '#00458a' }}
            type="star"
            onClick={() => dispatch(addFavorite(post.post._id))}
          />
        )}
      </div>
    </div>
  );
};

export default PostCardHeader;
