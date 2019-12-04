import React from 'react';
import { Tag } from 'antd';

import './postThumb.css';
import ConditionTag from '../ConditionTag';
import FavoriteCounter from '../FavoriteCounter';
import ViewCounter from '../ViewCounter';

const PostThumbDetails = post => {
  console.log(post);
  return (
    <div className="br-postThumb-details">
      {/* Title & Price */}
      <strong style={{ fontSize: '20px' }}>
        {post.post.title + '  $' + post.post.price}
        <ViewCounter viewCount={post.post.viewCount} />
        <FavoriteCounter favorites={post.post.favorites} _id={post.post._id} />
      </strong>

      <ConditionTag condition={post.post.condition} />

      {/* Dimensions & Volume */}
      <i>
        <div style={{ display: 'inline-block' }}>
          {'Dims: ' +
            post.post.lengthFt +
            "' " +
            post.post.lengthIn +
            '" x ' +
            post.post.width +
            '" x ' +
            post.post.depth +
            '"'}
        </div>
        <div style={{ display: 'inline-block', marginLeft: '20px' }}>
          {'Volume: ' + post.post.volume + 'L'}
        </div>
      </i>
    </div>
  );
};

export default PostThumbDetails;
