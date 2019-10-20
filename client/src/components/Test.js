import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './createPost/addDetails/imageUpload/imgUpload.css';
import PostCard from './post/postPreview/PostCard';
import Banner from './home/banner/Banner';
import Filter from './home/searchFilter/Filter';
import { loadPosts } from '../actions/post/post';

const Test = props => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.post.postList);

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  return (
    <div>
      <Banner />
      <Filter />
      <div style={{ display: 'inline-block', maxWidth: 'calc(100% - 260px)' }}>
        {posts.map(post => {
          return <PostCard key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default Test;
