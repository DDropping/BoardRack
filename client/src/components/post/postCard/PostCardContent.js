import React from 'react';

import '../post.css';
import Dimensions from '../Dimensions';
import ConditionTag from '../ConditionTag';

const PostCardContent = ({ post }) => {
  return (
    <div className="br-post-card-content">
      <div style={{ fontSize: '20px' }}>
        {post.title}
        <ConditionTag condition={post.condition} />
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
