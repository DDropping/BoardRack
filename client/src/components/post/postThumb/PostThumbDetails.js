import React from 'react';

import './postThumb.css';

const PostThumbDetails = post => {
  console.log(post);
  return (
    <div className="br-postThumb-details">
      <strong style={{ fontSize: '20px' }}>
        {post.post.title + '  $' + post.post.price}
      </strong>
      {post.post.heightFt}
    </div>
  );
};

export default PostThumbDetails;
