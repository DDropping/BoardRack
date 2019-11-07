import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addView } from '../../../actions/post/post';

const PostModalBody = post => {
  const dispatch = useDispatch();
  const viewedPosts = useSelector(state => state.post.viewedPosts);

  useEffect(() => {
    //increase post viewCount if this is first time user is viewing post
    if (
      viewedPosts.filter(
        postId => postId.toString() === post.post._id.toString()
      ).length === 0
    ) {
      dispatch(addView(post.post._id));
    }
  }, [post.post._id, dispatch, viewedPosts]);

  return (
    <div>
      <div>{post.post.title}</div>
    </div>
  );
};

export default PostModalBody;
