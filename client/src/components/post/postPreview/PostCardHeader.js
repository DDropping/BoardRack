import React, { useState, useEffect } from 'react';
import { Icon } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import '../post.css';
import { addFavorite } from '../../../actions/post/post';

const PostCardHeader = (post, isFavoriteInitalValue) => {
  const dispatch = useDispatch();
  //   const user = useSelector(state => state.auth.user);
  const [isFavorite, setFavorite] = useState(isFavoriteInitalValue);

  //   useEffect(() => checkFavorite(user), []);

  //   const checkFavorite = user => {
  //     if (user !== null) {
  //       if (
  //         post.post.favorites.filter(
  //           favorite => favorite.user.toString() === user._id
  //         ).length > 0
  //       ) {
  //         setFavorite(true);
  //       }
  //     }
  //   };
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
            onClick={() => setFavorite(false)}
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
