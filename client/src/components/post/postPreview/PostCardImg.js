import React from 'react';
import { useDispatch } from 'react-redux';

import '../post.css';
import { selectPost } from '../../../actions/post/post';

const PostCardImg = post => {
  const dispatch = useDispatch();
  return (
    <div
      className="br-post-card-img-wrapper"
      onClick={() => dispatch(selectPost(post))}
    >
      <div className="br-post-card-img">
        <img
          className="br-post-card-img"
          alt=""
          src={post.post.images[0].thumbnail}
        />
      </div>
    </div>
  );
};

export default PostCardImg;
