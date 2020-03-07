import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import PostModal from '../PostModal';

const PostModalSimilarPostCard = ({ post }) => {
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
    <div style={{ display: 'inline-block' }}>
      <div
        onClick={() => {
          setIsPostModalOpen(true);
        }}
        className="br-post-modal-similar-post-card-wrapper"
      >
        <div className="br-post-modal-similar-post-card-img-wrapper">
          <div
            className="br-post-modal-similar-post-img-background"
            style={{ backgroundImage: 'url(' + post.images[0].thumbnail + ')' }}
          />
          <img
            className="br-post-modal-similar-post-card-img"
            alt=""
            src={post.images[0].thumbnail}
          ></img>
        </div>
        <div
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            padding: '5px'
          }}
        >
          {post.title}
          <br /> {post.lengthFt}'{post.lengthIn}"x{post.width}"x{post.depth}"
        </div>
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

export default PostModalSimilarPostCard;
