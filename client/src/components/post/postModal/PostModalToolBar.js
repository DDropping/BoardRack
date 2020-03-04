import React from 'react';
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
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <div className="br-post-modal-toolbar-wrapper">
      {isAuthenticated && isFavorite && (
        <div
          className="br-post-modal-toolbar-button"
          onClick={e => {
            dispatch(removeFavorite(post._id));
            setIsFavorite(false);
          }}
        >
          <Icon type="star" theme="filled" /> Unfavorite
        </div>
      )}

      {isAuthenticated && !isFavorite && (
        <div
          className="br-post-modal-toolbar-button"
          onClick={e => {
            dispatch(addFavorite(post._id));
            setIsFavorite(true);
          }}
        >
          <Icon type="star" /> Favorite
        </div>
      )}

      {!isAuthenticated && (
        <div
          style={{
            cursor: 'not-allowed',
            display: 'inline-block',
            padding: '0px 20px',
            borderRight: '2px solid white'
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
        className="br-post-modal-toolbar-button"
        onClick={() =>
          console.log('click favorite postmodaltoolbar contact button')
        }
      >
        <Icon type="mail" /> Contact
      </div>

      <div
        className="br-post-modal-toolbar-exit-button"
        onClick={() => hidePostModal()}
      >
        <Icon type="close-circle" /> Close
      </div>
    </div>
  );
};

export default PostModalToolBar;
