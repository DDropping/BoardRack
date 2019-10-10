import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Fade from 'react-reveal/Fade';

import { OPEN_POST_MODAL, CLOSE_POST_MODAL } from '../../actions/types';

const PostModal = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector(state => state.postItem.isVisible);
  return (
    <div>
      <button onClick={() => dispatch({ type: OPEN_POST_MODAL })}>Open</button>
      {isVisible ? (
        <div className="br-post-modal-grey">
          <Fade left>
            <div className="br-post-modal-wrapper">
              loremksdjf ksdf jsdjf klsjd flkjda kfjkdsj fadflk jsd f
              sdfljdlkjfksdfk f jdf jdkfjlksf dfj kldf fj sdfjsald jfdf; asdf;s
              <button onClick={() => dispatch({ type: CLOSE_POST_MODAL })}>
                Close
              </button>
            </div>
          </Fade>
        </div>
      ) : null}
    </div>
  );
};

export default PostModal;
