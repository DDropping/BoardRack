import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import '../post.css';
import PostModal from '../postModal/PostModal';
import PostCardHeader from './PostCardHeader';
import PostCardImg from './PostCardImg';
import PostCardContent from './PostCardContent';
import { TOGGLE_POST_MODAL } from '../../../actions/types';

const PostCard = post => {
  const dispatch = useDispatch();
  const isPostModalOpen = useSelector(state => state.post.isPostModalOpen);
  return (
    <div className="br-post-card-container">
      <PostCardHeader post={post.post} />
      <div
        onClick={() => {
          dispatch({ type: TOGGLE_POST_MODAL, payload: true });
        }}
      >
        <PostCardImg post={post.post} />
        <PostCardContent post={post.post} />
      </div>
      {isPostModalOpen && <PostModal post={post.post} />}
    </div>
  );
};

export default PostCard;
