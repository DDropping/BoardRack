import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './postThumb.css';
import PostModal from '../postModal/PostModal';
import PostImg from './PostImg';
import PostThumbDetails from './PostThumbDetails';
import { TOGGLE_POST_MODAL } from '../../../actions/types';

const PostThumb = ({ post }) => {
  const dispatch = useDispatch();
  const isPostModalOpen = useSelector(state => state.post.isPostModalOpen);
  return (
    <div className="br-postThumb-container">
      <div
        onClick={() => {
          dispatch({ type: TOGGLE_POST_MODAL, payload: true });
        }}
      >
        <PostImg post={post} />
        <PostThumbDetails post={post} />
      </div>
      {isPostModalOpen && <PostModal post={post} />}
    </div>
  );
};

export default PostThumb;
