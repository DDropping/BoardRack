import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from 'antd';

import './postModal.css';
import { addFavorite, removeFavorite } from '../../../actions/post/post';

const PostModalToolBar = ({
  post,
  hidePostModal,
  isFavorite,
  setIsFavorite
}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  return (
    <div className="br-post-modal-toolbar-wrapper">
      {isFavorite && (
        <div
          style={{
            display: 'inline-block',
            padding: '0px 20px',
            cursor: 'pointer'
          }}
          onClick={e => {
            dispatch(removeFavorite(post._id));
            setIsFavorite(false);
          }}
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
          onClick={e => {
            dispatch(addFavorite(post._id));
            setIsFavorite(true);
          }}
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
