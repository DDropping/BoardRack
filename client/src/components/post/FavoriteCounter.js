import React from 'react';
import { Icon } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import './post.css';
import { addFavorite, removeFavorite } from '../../actions/post/post';

const FavoriteCounter = ({ favorites, isFavorite, setIsFavorite, _id }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  console.log('favorite: ' + isFavorite);
  return (
    <div style={{ display: 'inline-block' }}>
      <div
        style={{
          display: 'inline-block',
          marginRight: '2px',
          fontSize: '18px',
          color: '#616161',
          position: 'relative',
          top: '-1px'
        }}
      >
        {favorites.length}
      </div>
      {/* Three options for what star to display below */}
      {isAuthenticated && isFavorite && (
        <Icon
          className="br-post-card-header-star-icon"
          style={{ fontSize: '20px', color: '#00458a' }}
          type="star"
          theme="filled"
          onClick={e => {
            e.stopPropagation();
            dispatch(removeFavorite(_id));
            setIsFavorite(false);
          }}
        />
      )}
      {isAuthenticated && !isFavorite && (
        <Icon
          className="br-post-card-header-star-icon"
          style={{ fontSize: '20px', color: '#00458a' }}
          type="star"
          onClick={e => {
            e.stopPropagation();
            dispatch(addFavorite(_id));
            setIsFavorite(true);
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
