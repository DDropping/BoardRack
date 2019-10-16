import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Fade from 'react-reveal/Fade';
import { Icon } from 'antd';

import '../post.css';
import { CLOSE_POST_MODAL } from '../../../actions/types';
import PostModalBody from './PostModalBody';

const PostModal = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector(state => state.overlay.isPostModalVisible);
  return (
    <div>
      {isVisible ? (
        <div>
          <div
            className="br-post-modal-grey"
            onClick={() => dispatch({ type: CLOSE_POST_MODAL })}
          />
          <Fade>
            <div className="br-post-modal-wrapper">
              <Icon
                type="close-circle"
                onClick={() => dispatch({ type: CLOSE_POST_MODAL })}
                style={{
                  fontSize: '25px',
                  position: 'absolute',
                  right: 5,
                  top: 5
                }}
              />
              <PostModalBody />
            </div>
          </Fade>
        </div>
      ) : null}
    </div>
  );
};

export default PostModal;
