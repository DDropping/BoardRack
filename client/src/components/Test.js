import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './createPost/addDetails/imageUpload/imgUpload.css';
import PostPreview from './post/postPreview/PostPreview';
import PostCard from './post/postPreview/PostCard';
import { loadPosts } from '../actions/post/post';

const Test = props => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.post.postList);

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  return (
    <div>
      <PostCard />
      {posts.map(post => {
        return <PostPreview key={post._id} post={post} />;
      })}
    </div>
  );
};

export default Test;
