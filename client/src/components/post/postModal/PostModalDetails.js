import React from 'react';

import './postModal.css';
import PostModalUserBox from './PostModalUserBox';

const PostModalDetails = ({ post }) => {
  console.log(post);
  return (
    <div className="br-post-modal-details-wrapper">
      <PostModalUserBox user={post.user} location={post.location} />
      <div> Details</div>
    </div>
  );
};
export default PostModalDetails;
