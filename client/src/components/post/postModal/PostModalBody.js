import React, { useEffect } from 'react';
import { addView } from '../../../actions/post/post';

const PostModalBody = post => {
  useEffect(() => addView(post.post._id), []);
  return (
    <div>
      <div>{post.post.title}</div>
    </div>
  );
};

export default PostModalBody;
