import React from 'react';
import { useDispatch } from 'react-redux';

import '../post.css';
import { selectPost } from '../../../actions/post/post';

const PostCardContent = post => {
  const dispatch = useDispatch();
  return (
    <div
      className="br-post-card-content"
      onClick={() => dispatch(selectPost(post))}
    >
      <h3>{post.post.title}</h3>
      6'2" - 19 3/4" - 2 3/8"
    </div>
  );
};

export default PostCardContent;
