import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import './postThumb.css';
import PostModal from '../postModal/PostModal';
import PostThumbImg from './PostThumbImg';
import PostThumbDetails from './PostThumbDetails';

const PostThumb = ({ post }) => {
  const user = useSelector(state => state.auth.user);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
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
    <div className="br-postThumb-container">
      <div
        onClick={() => {
          setIsPostModalOpen(true);
        }}
      >
        <PostThumbImg post={post} />
        <PostThumbDetails
          post={post}
          isFavorite={isFavorite}
          setIsFavorite={setIsFavorite}
        />
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

export default PostThumb;
