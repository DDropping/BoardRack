/* Displays postModal if isPostModalVisible === true */

import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Fade from 'react-reveal/Fade';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from 'body-scroll-lock';

import './postModal.css';
import { addView } from '../../../actions/post/post';
import PostModalToolBar from './PostModalToolBar';
import PostModalImages from './PostModalImages';
import PostModalDetails from './PostModalDetails/PostModalDetails';

const PostModal = ({ post, hidePostModal, isFavorite, setIsFavorite }) => {
  const postRef = useRef(document.querySelector('.br-post-modal-wrapper'));
  const dispatch = useDispatch();
  const viewedPosts = useSelector(state => state.post.viewedPosts);

  useEffect(() => {
    //increase post viewCount if this is first time user is viewing post
    if (
      viewedPosts.filter(postId => postId.toString() === post._id.toString())
        .length === 0
    ) {
      dispatch(addView(post._id));
    }
  }, [post._id, dispatch, viewedPosts]);

  useEffect(() => {
    showTargetElement();
  }, []);

  const showTargetElement = () => {
    disableBodyScroll(postRef.current);
  };

  const hideTargetElement = () => {
    enableBodyScroll(postRef.current);
    clearAllBodyScrollLocks();
  };

  return (
    <Fade>
      <div
        className="br-post-modal-grey"
        onClick={() => {
          hideTargetElement();
          hidePostModal();
        }}
      />

      <div className="br-post-modal-wrapper">
        <PostModalToolBar
          post={post}
          hidePostModal={hidePostModal}
          hideTargetElement={hideTargetElement}
          isFavorite={isFavorite}
          setIsFavorite={setIsFavorite}
        />
        <div className="br-post-modal-header">
          {'$' + post.price + ' ' + post.title}
        </div>
        <PostModalImages images={post.images} />
        <PostModalDetails post={post} />
      </div>
    </Fade>
  );
};

export default PostModal;
