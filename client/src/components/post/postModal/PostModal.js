/* Displays postModal if isPostModalVisible === true */

import React from 'react';
import { useDispatch } from 'react-redux';
import Fade from 'react-reveal/Fade';
import { Icon } from 'antd';

import '../post.css';
import PostModalBody from './PostModalBody';
import { TOGGLE_POST_MODAL } from '../../../actions/types';

const PostModal = ({ post }) => {
  const dispatch = useDispatch();
  return (
    <Fade>
      <div
        className="br-post-modal-grey"
        onClick={() => dispatch({ type: TOGGLE_POST_MODAL, payload: false })}
      />

      <div className="br-post-modal-wrapper">
        <Icon
          type="close-circle"
          onClick={() => dispatch({ type: TOGGLE_POST_MODAL, payload: false })}
          style={{
            fontSize: '25px',
            position: 'absolute',
            right: 5,
            top: 5
          }}
        />
        <PostModalBody post={post} />
      </div>
    </Fade>
  );
};

export default PostModal;
