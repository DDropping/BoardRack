import React, { useState, useEffect } from 'react';
import { Icon } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import './post.css';
import { addFavorite, removeFavorite } from '../../actions/post/post';

const FavoriteCounter = (favorites, _id) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.user);
  const [isFavorite, setFavorite] = useState(false);

  //check if logged in user has favorited this post
  useEffect(() => {
    if (user !== null) {
      if (
        favorites.favorites.filter(favorite => favorite.toString() === user._id)
          .length > 0
      ) {
        setFavorite(true);
      }
    }
  }, [user, isFavorite, favorites]);
  console.log('favorite: ');
  console.log(favorites);
  return (
    <div>
      <div
        style={{
          display: 'inline-block',
          fontSize: '18px',
          color: '#616161',
          position: 'relative',
          top: '-1px'
        }}
      >
        {favorites.favorites.length}
      </div>
      {/* Three options for what star to display below */}
      {isAuthenticated && isFavorite && (
        <Icon
          className="br-post-card-header-star-icon"
          style={{ fontSize: '20px', color: '#00458a' }}
          type="star"
          theme="filled"
          onClick={() => {
            dispatch(removeFavorite(_id));
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
            dispatch(addFavorite(_id));
            setFavorite(true);
          }}
        />
      )}
      {!isAuthenticated && (
        <Icon style={{ fontSize: '20px', color: '#00458a' }} type="star" />
      )}
    </div>
  );
};

export default FavoriteCounter;
