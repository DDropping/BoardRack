import React, { useState } from 'react';

import './postThumb.css';
import PostModal from '../postModal/PostModal';
import PostImg from './PostImg';
import PostThumbDetails from './PostThumbDetails';

const PostThumb = ({ post }) => {
  const [isPostModalOpen, setIsPostModalOpen] = useState(true);
  const hidePostModal = () => setIsPostModalOpen(false);
  return (
    <div className="br-postThumb-container">
      <div
        onClick={() => {
          setIsPostModalOpen(true);
        }}
      >
        <PostImg post={post} />
        <PostThumbDetails post={post} />
      </div>
      {isPostModalOpen && (
        <PostModal post={post} hidePostModal={hidePostModal} />
      )}
    </div>
  );
};

export default PostThumb;
