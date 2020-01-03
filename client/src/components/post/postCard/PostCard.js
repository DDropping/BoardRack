import React, { useState } from 'react';

import '../post.css';
import PostModal from '../postModal/PostModal';
import PostCardHeader from './PostCardHeader';
import PostCardImg from './PostCardImg';
import PostCardContent from './PostCardContent';

const PostCard = post => {
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const hidePostModal = () => setIsPostModalOpen(false);

  return (
    <div className="br-post-card-container">
      <PostCardHeader post={post.post} />
      <div
        onClick={() => {
          setIsPostModalOpen(true);
        }}
      >
        <PostCardImg post={post.post} />
        <PostCardContent post={post.post} />
      </div>
      {isPostModalOpen && (
        <PostModal post={post.post} hidePostModal={hidePostModal} />
      )}
    </div>
  );
};

export default PostCard;
