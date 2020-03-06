import React from 'react';

const PostModalSimilarPostCard = ({ post }) => {
  return (
    <div className="br-post-modal-similar-post-card-wrapper">
      <div className="br-post-modal-similar-post-card">
        <div className="br-post-modal-similar-post-card-img-wrapper">
          <img
            className="br-post-modal-similar-post-card-img"
            alt=""
            src={post.images[0].thumbnail}
          ></img>
        </div>
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
  );
};

export default PostModalSimilarPostCard;
