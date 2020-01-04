/* Displays postModal if isPostModalVisible === true */

import React from 'react';
import Fade from 'react-reveal/Fade';
import { Icon } from 'antd';

import '../post.css';
import PostModalBody from './PostModalBody';

const PostModal = ({ post, hidePostModal }) => {
  return (
    <Fade>
      <div className="br-post-modal-grey" onClick={() => hidePostModal()} />

      <div className="br-post-modal-wrapper">
        <Icon
          type="close-circle"
          onClick={() => hidePostModal()}
          style={{
            fontSize: '25px',
            position: 'absolute',
            right: 5,
            top: 5
          }}
        />{' '}
        .
        <PostModalBody post={post} />
      </div>
    </Fade>
  );
};

export default PostModal;
