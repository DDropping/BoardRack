import React from 'react';

import './postCard.css';
import Dimensions from '../Dimensions';

const PostCardContent = ({ post }) => {
  return (
    <div className="br-post-card-content">
      <div
        style={{
          fontSize: '18px',
          width: '100% ',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}
      >
        <strong>{post.title}</strong>
      </div>
      <Dimensions
        lengthFt={post.lengthFt ? post.lengthFt : null}
        lengthIn={post.lengthIn ? post.lengthIn : null}
        width={post.width ? post.width : null}
        depth={post.depth ? post.depth : null}
        volume={post.volume ? post.volume : null}
      />
    </div>
  );
};

export default PostCardContent;
