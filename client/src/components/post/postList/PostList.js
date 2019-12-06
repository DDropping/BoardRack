import React from 'react';

import './postList.css';
import ConditionTag from '../ConditionTag';
import Dimensions from '../Dimensions';
import FavoriteCounter from '../FavoriteCounter';
import ViewCounter from '../ViewCounter';

const PostList = ({ post }) => {
  return (
    <div className="br-postList-container ">
      <div
        style={{ fontSize: '20px', display: 'inline-block', width: '100px' }}
      >
        ${post.price}
      </div>
      <div
        style={{
          display: 'inline-block',
          float: 'right'
        }}
      >
        <ViewCounter viewCount={post.viewCount} />
        <FavoriteCounter favorites={post.favorites} _id={post._id} />
      </div>
      <div
        style={{
          fontSize: '20px',
          display: 'inline-block',
          width: 'calc(100% - 225px)',
          whiteSpace: 'nowrap',
          overflow: 'hidden'
        }}
      >
        <strong>{post.title}</strong>
      </div>
      <div style={{ display: 'inline-block', width: '100px' }}>
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

export default PostList;
