import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import '../post.css';
import PostModal from '../postModal/PostModal';
import PostCardHeader from './PostCardHeader';
import PostCardImg from './PostCardImg';
import PostCardContent from './PostCardContent';

const PostCard = ({ post }) => {
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const user = useSelector(state => state.auth.user);
  const [isFavorite, setIsFavorite] = useState(
    user !== null
      ? post.favorites.filter(favorite => favorite.toString() === user._id)
          .length > 0
        ? true
        : false
      : false
  );

  const hidePostModal = () => setIsPostModalOpen(false);

  return (
    <div className="br-post-card-container">
      <PostCardHeader
        post={post}
        isFavorite={isFavorite}
        setIsFavorite={setIsFavorite}
      />
      <div
        onClick={() => {
          setIsPostModalOpen(true);
        }}
      >
        <PostCardImg post={post} />
        <PostCardContent post={post} />
      </div>
      {isPostModalOpen && (
        <PostModal
          post={post}
          hidePostModal={hidePostModal}
          isFavorite={isFavorite}
          setIsFavorite={setIsFavorite}
        />
      )}
    </div>
  );
};

export default PostCard;
