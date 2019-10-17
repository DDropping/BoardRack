import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './createPost/addDetails/imageUpload/imgUpload.css';
import { OPEN_POST_MODAL } from '../actions/types';
import PostPreview from './post/postPreview/PostPreview';
import { loadPosts } from '../actions/post/post';

const Test = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  return (
    <div>
      <button onClick={() => dispatch({ type: OPEN_POST_MODAL })}>Open</button>
      <PostPreview />
    </div>
  );
};

export default Test;
