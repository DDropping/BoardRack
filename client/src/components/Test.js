import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PostThumb from '../components/post/postThumb/PostThumb';
import { loadPosts } from '../actions/post/post';

const Test = () => {
  const dispatch = useDispatch();
  const [isFiltersVisible] = useState(false);
  const posts = useSelector(state => state.post.postList);

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  return (
    <div
      className={
        isFiltersVisible ? 'br-posts-filter-container' : 'br-posts-container'
      }
    >
      {posts.map((post, index) => {
        if (post.price === '127') return <PostThumb key={index} post={post} />;
      })}
    </div>
  );
};

export default Test;
