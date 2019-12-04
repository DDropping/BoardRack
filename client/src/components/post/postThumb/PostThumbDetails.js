import React from 'react';
import { Tag } from 'antd';

import './postThumb.css';
import FavoriteCounter from '../FavoriteCounter';

const PostThumbDetails = post => {
  console.log(post);
  return (
    <div className="br-postThumb-details">
      {/* Title & Price */}
      <strong style={{ fontSize: '20px' }}>
        {post.post.title + '  $' + post.post.price}
        <FavoriteCounter favorites={post.post.favorites} _id={post.post._id} />
      </strong>

      {/* Condition */}
      <div
        style={{
          display: 'inline-block',
          marginLeft: '10px',
          position: 'relative',
          top: '-3px'
        }}
      >
        {post.post.condition === 'New' && <Tag color="#52c41a">New</Tag>}
        {post.post.condition === 'Lightly Used' && (
          <Tag color="#00458a">Lightly Used</Tag>
        )}
        {post.post.condition === 'Used' && <Tag color="#00458a">Used</Tag>}
        {post.post.condition === 'Heavily Used' && (
          <Tag color="#4878a9">Heavily Used</Tag>
        )}
        {post.post.condition === 'Thrashed' && <Tag color="#f50">Thrashed</Tag>}
      </div>
      <br />

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
