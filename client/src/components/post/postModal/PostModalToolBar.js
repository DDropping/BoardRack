import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Icon } from 'antd';

import './postModal.css';

const PostModalToolBar = ({ post, hidePostModal }) => {
  const user = useSelector(state => state.auth.user);
  const [isFavorite, setFavorite] = useState(false);

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
    <div className="br-post-modal-toolbar-wrapper">
      {isFavorite && (
        <div
          style={{
            display: 'inline-block',
            padding: '0px 20px',
            cursor: 'pointer'
          }}
          onClick={() => console.log('click favorite postmodaltoolbar')}
        >
          <Icon type="star" theme="filled" /> Unfavorite
        </div>
      )}
      {!isFavorite && (
        <div
          style={{
            display: 'inline-block',
            padding: '0px 20px',
            cursor: 'pointer'
          }}
          onClick={() => console.log('click favorite postmodaltoolbar')}
        >
          <Icon type="star" /> Favorite
        </div>
      )}
      <div
        style={{
          display: 'inline-block',
          padding: '0px 20px',
          cursor: 'pointer',
          borderLeft: '2px solid white'
        }}
        onClick={() => console.log('click favorite postmodaltoolbar')}
      >
        <Icon type="mail" /> Contact
      </div>
      <div
        style={{
          float: 'right',
          padding: '0px 20px',
          cursor: 'pointer',
          borderLeft: '2px solid white'
        }}
        onClick={() => hidePostModal()}
      >
        <Icon type="close-circle" /> Close
      </div>
      <div className="br-post-modal-toolbar"></div>
    </div>
  );
};

export default PostModalToolBar;
