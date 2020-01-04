/* Displays postModal if isPostModalVisible === true */

import React from 'react';
import Fade from 'react-reveal/Fade';

import '../post.css';
import PostModalToolBar from './PostModalToolBar';
import PostModalBody from './PostModalBody';

const PostModal = ({ post, hidePostModal }) => {
  return (
    <Fade>
      <div className="br-post-modal-grey" onClick={() => hidePostModal()} />

      <div className="br-post-modal-wrapper">
        <PostModalToolBar post={post} hidePostModal={hidePostModal} />
        <PostModalBody post={post} />
      </div>
    </Fade>
  );
};

export default PostModal;
