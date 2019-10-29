import React from 'react';
import { useSelector } from 'react-redux';

const PostModalBody = () => {
  const post = useSelector(state => state.post.selectedPost);
  return (
    <div>
      <div>{post.title}</div>
    </div>
  );
};

export default PostModalBody;
