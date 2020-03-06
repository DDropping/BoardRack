import React from 'react';

const PostModalSimilarPostCard = ({ post }) => {
  return (
    <div className="br-post-modal-similar-post-card-wrapper">
      <div className="br-post-modal-similar-post-card">
        <div>image</div>
      </div>
      <div
        style={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}
      >
        {post.title}
        <br /> 5'8x20"x2.375"
      </div>
    </div>
  );
};

export default PostModalSimilarPostCard;
