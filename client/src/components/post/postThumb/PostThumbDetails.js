import React from 'react';
import { Tag } from 'antd';

import './postThumb.css';
import ConditionTag from '../ConditionTag';
import Dimensions from '../Dimensions';
import FavoriteCounter from '../FavoriteCounter';
import ViewCounter from '../ViewCounter';

const PostThumbDetails = post => {
  console.log(post);
  return (
    <div className="br-postThumb-details">
      <div style={{ display: 'inline-block', width: '100%' }}>
        {/* Title & Price */}
        <strong style={{ fontSize: '20px' }}>
          {post.post.title + '  $' + post.post.price}
        </strong>

        <ConditionTag condition={post.post.condition} />
        <div style={{ display: 'inline-block', float: 'right' }}>
          <ViewCounter viewCount={post.post.viewCount} />
          <FavoriteCounter
            favorites={post.post.favorites}
            _id={post.post._id}
          />
        </div>
      </div>

      {/* Dimensions & Volume */}
      <Dimensions
        lengthFt={post.post.lengthFt}
        lengthIn={post.post.lengthIn}
        width={post.post.width}
        depth={post.post.depth}
        volume={post.post.volume}
      />
      {/* <div>
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
      </div> */}
      <div style={{ position: 'absolute', bottom: '10px', float: 'right' }}>
        {post.post.location.city + ', ' + post.post.location.state}
      </div>
    </div>
  );
};

export default PostThumbDetails;
