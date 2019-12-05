import React from 'react';

import './postThumb.css';
import ConditionTag from '../ConditionTag';
import Dimensions from '../Dimensions';
import FavoriteCounter from '../FavoriteCounter';
import ViewCounter from '../ViewCounter';

const PostThumbDetails = ({ post }) => {
  console.log(post);
  return (
    <div className="br-postThumb-details">
      <div style={{ display: 'inline-block', width: '100%' }}>
        {/* Title & Price */}
        <strong style={{ fontSize: '20px' }}>
          {post.title + '  $' + post.price}
        </strong>

        <ConditionTag condition={post.condition} />
        <div
          style={{
            display: 'inline-block',
            float: 'right'
          }}
        >
          <ViewCounter viewCount={post.viewCount} />
          <FavoriteCounter favorites={post.favorites} _id={post._id} />
        </div>
      </div>
      <Dimensions
        lengthFt={post.lengthFt ? post.lengthFt : null}
        lengthIn={post.lengthIn ? post.lengthIn : null}
        width={post.width ? post.width : null}
        depth={post.depth ? post.depth : null}
        volume={post.volume ? post.volume : null}
      />
      <div style={{ position: 'absolute', bottom: '20px' }}>
        {post.location.city + ', ' + post.location.state}
      </div>
    </div>
  );
};

export default PostThumbDetails;
